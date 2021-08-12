from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
import datetime
import dateutil.parser
import time
from datetime import timedelta
from nomics import Nomics
import json
myKey = ""
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
				priceInterv = "1d" #defaulting for below

			desiredInterv = rawQuery["priceInterv"][0]
			respo = self.getPrices(request, desiredInterv)
			#respo may not contain data for every coin.. so, try to add something and fall back onto default val in try 
			#also deal with depended on attributes to default their values, if not there
			for index, obj in enumerate(currencyData):
				#given interv, check if it was valid; if so, check if coin gives data for it; if not, set default; if so, adjust its respective data
				if(desiredInterv in ["1d", "7d", "30d", "365d"] and desiredInterv not in obj):
					obj[desiredInterv] = {"volume": "N/A"} #other vals, as seen below, don't give errors?
				elif(desiredInterv in ["1d", "7d", "30d", "365d"]):
					#necessarily true 1d in obj, and requested
					obj[desiredInterv]["price_change_pct"] = self.getCleanPricePCT(obj[desiredInterv]["price_change_pct"])
					obj[desiredInterv]["volume"] = str(round(float(obj[desiredInterv]["volume"]) / 1000000000, 2)) + "B"				
					
					if(float(obj[desiredInterv]["price_change_pct"]) > 0):
						obj["price_color"] = "green"
					else:
						obj["price_color"] = "red"

				obj["price"] = "{:,}".format(round(float(obj["price"]),3))
				
				#need to attempt to format individually
				try:
					obj["high"] = "{:,}".format(round(float(obj["high"]), 3))
				except:
					obj["high"] = "N/A"
				try:
					obj["first_candle"] = dateutil.parser.isoparse(obj["first_candle"]).strftime("%B %d, %Y")
				except:
					pass
				try:
					obj["market_cap"] = str(round(float(obj["market_cap"]) / 1000000000, 2)) + "B"
				except:
					obj["market_cap"] = "N/A"
				try:
					obj["max_supply"] = "{:,}".format(float(obj["max_supply"]))
				except:
					obj["max_supply"] = "None"
				try:	
					currencyData[index]["prices"] = respo[obj["id"]]
				except:
					currencyData[index]["prices"] = [{"stmp": "", "prc": 0}]		
		self.wfile.write(bytes(json.dumps(currencyData), 'utf-8'))
		return
	
	def getCleanPricePCT(self, val):
		return round(float(val)*100, 5)

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
					currencyX.append({"stmp": dateutil.parser.isoparse(stmp).strftime("%b %d "), "prc":float(el["prices"][indx])})
			formattedPrices[el["currency"]] = currencyX
			currencyX = []
		return formattedPrices		

	def sendBadHeaderResponse(self, msg):
		self.send_response(404, message = msg)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
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
