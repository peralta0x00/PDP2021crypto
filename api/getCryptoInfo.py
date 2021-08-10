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
		rawQuery = parse_qs(pars[4])
		if("params" not in rawQuery):
			self.sendBadResponse("Bad request, can't find params")
			return
			
		#need to upper since API wants upper
		pairsAsStr = rawQuery["params"][0].upper()
		#data comes with all intervals... 
		currencyData = nomics.Currencies.get_currencies(ids = pairsAsStr)
		
		if not currencyData:		
			self.sendBadHeaderResponse("Bad request, try again with proper param currencies")
			return

		self.sendGoodHeaderResponse()
		time.sleep(1)

		if("priceHist" in rawQuery and rawQuery["priceHist"][0] == "true"):
			request = sparklineURL + pairsAsStr
			if("priceInterv" in rawQuery):
				#defaults to 12 hrs if bad interv
				request += "&start="+self.getTimeInterv(rawQuery["priceInterv"][0])
			else:
				request += "&start="+self.getTimeInterv(None)
			respo = self.getPrices(request, rawQuery["priceInterv"][0])
			
			#respo may not contain data for every coin.. so, try to add something and fall back onto default val in try 
			#also deal with depended on attributes to default their values, if not there
			for index, obj in enumerate(currencyData):
				if("1d" not in obj):
					obj["1d"] = {"volume": "N/A"}
				else:
					#formatting numbers so no need later
					obj["1d"]["price_change_pct"] = round(float(obj["1d"]["price_change_pct"])*100, 5)
					obj["1d"]["volume"] = round(float(obj["1d"]["volume"]) / 1000000000, 5)				
					obj["price"] = round(float(obj["price"]),4)
					if(float(obj["1d"]["price_change_pct"]) > 0):
						obj["price_color"] = "green"
					else:
						obj["price_color"] = "red"
				try:	
					currencyData[index]["prices"] = respo[obj["id"]]
				except:
					currencyData[index]["prices"] = [{"stmp": "", "prc": 0}]		
		self.wfile.write(bytes(json.dumps(currencyData), 'utf-8'))
		return
	
	def getPrices(self, sprkURL, desiredInterv):
		respo = {}
		formattedPrices = {}
		currencyX = []
		with urllib.request.urlopen(sprkURL) as response:
			#for each currency,  index 0:ticker, 1: tmestmp, 2: price
			respo = json.load(response)

		#iterate respo; turns out, some coins CANNOT provide data for given date..
		#as such, create dict with data that CAN provide data. later, will hand out
		#elements that exist based on key (since it's a dict) and keys not existing means
		#no data, in current timeframe...
		
		#create desired format of [{"stmp": someStrDate, "prc": someNum}, {...}]
		for elIndex, el in enumerate(respo):
			#timestamps and price assumed same lengths... so iterate timestamps and use its index to align the corresponding points
			for indx, stmp in enumerate(el["timestamps"]):
				if(desiredInterv == "1d"):
					currencyX.append({"stmp": dateutil.parser.isoparse(stmp).strftime("%H:00"), "prc":float(el["prices"][indx])})
				#if eventually needed, could adjust accordingly here if more formatting needed
				else:
					currencyX.append({"stmp": dateutil.parser.isoparse(stmp).strftime("%b %d"), "prc":float(el["prices"][indx])})
			formattedPrices[el["currency"]] = currencyX
			currencyX = []
		print(formattedPrices)
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
