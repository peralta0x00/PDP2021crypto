from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
import datetime
import dateutil.parser
import time
from datetime import timedelta
from nomics import Nomics
import json

myKey = "33286a74065de28c4b1e87c24522980d3f373ade"
nomics = Nomics(myKey)
sparklineURL = "https://api.nomics.com/v1/currencies/sparkline?key={}&ids=".format(myKey)
class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		pars = urlparse(self.path.replace("%2C", ","))
		#4th index dedicated to query, returns dict
		rawQuery = parse_qs(pars[4])
		if("params" not in rawQuery):
			self.sendBadResponse("Bad request, can't find params")
			return
			
		pairsAsStr = rawQuery["params"][0].upper() 
		#get_currencies seems to effectively return None (empty array) with bad request:
		tmpCurrData = nomics.Currencies.get_currencies(ids = pairsAsStr)
		if not tmpCurrData:		
			self.sendBadHeaderResponse("Bad request, try again with proper param currencies")
			return

		self.sendGoodHeaderResponse()
		time.sleep(1)
	 	#todo: maybe figure out how to not need to stay sorted ascending
		currencyData = sorted(tmpCurrData, key=lambda tmp: tmp["id"])
		
		if("priceHist" in rawQuery and rawQuery["priceHist"][0] == "true"):
			request = sparklineURL + pairsAsStr
			#should always appear, as there's a default 1d param... just ensure it's there?
			if("priceInterv" in rawQuery):
				#may default if improper priceInterv, ultimately defaults to 7d... 
				request += "&start="+self.getTimeInterv(rawQuery["priceInterv"][0])
			else:
				request += "&start="+self.getTimeInterv(None)
			#in same order as currencyData, returns array of json objects each representing datapoint of price... fulfills  
			respo = self.getPrices(request)
			for index, obj in enumerate(respo):
				currencyData[index]["prices"] = respo[index]
		self.wfile.write(bytes(json.dumps(currencyData), 'utf-8'))
		
		return
	
	def getPrices(self, sprkURL):
		respo = {}
		formattedPrices = []
		currencyX = []
		with urllib.request.urlopen(sprkURL) as response:
			#for each currency,  index 0:ticker, 1: tmestmp, 2: price
			respo = json.load(response)

		#could just be one... or very many, as seen in homepage
		for el in respo:
			for indx, stmp in enumerate(el["timestamps"]):
				currencyX.append({"stmp": dateutil.parser.isoparse(stmp).strftime("%b %d %y"), "prc":float(el["prices"][indx])})
				#currencyX.append({"stmp": indx, "prc":float(el["prices"][indx])})
			formattedPrices.append(currencyX)
			currencyX = []
		return formattedPrices		
	def sendBadHeaderResponse(self, msg):
		self.send_response(400, message = msg)
		self.send_header('Content-type', 'text/plain')
		self.send_headers()
		return
	def sendGoodHeaderResponse(self):
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
	
	def getTimeInterv(self, interv):
		if(interv=="1d"):
			delta = timedelta(hours=24)
		elif(interv=="7d"):
			delta = timedelta(days=7)
		elif(interv=="30d"):
			delta = timedelta(weeks=4)	
		elif(interv=="365d"):
			delta = timedelta(weeks=56)
		else:
			delta = timedelta(hours=12)
		now = datetime.datetime.utcnow() - delta
		return now.isoformat("T") + "Z"
