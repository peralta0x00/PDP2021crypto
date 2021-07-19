from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
import datetime
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
			self.sendBadResponse("Bad request, try again with proper param currencies")
			return

		self.sendGoodHeaderResponse()
		#todo: maybe figure out how to not need to stay sorted ascending
		currencyData = sorted(tmpCurrData, key=lambda tmp: tmp["id"])
		#handle rate limit..
		time.sleep(1)
		startTime="&start=" + self.getCurrentTimeRFC3339()

		if("priceHist" in rawQuery and rawQuery["priceHist"][0] == "true"):
			with urllib.request.urlopen(sparklineURL + pairsAsStr + startTime) as response:
				respo = json.load(response)
				#grab prices and throw it into its corresponding obj (w/metadat). since same keys expect both sorted, safe to say indexing will work..?	
				for index, obj in enumerate(respo) :
					currencyData[index]["prices"] = respo[index]["prices"]
		self.wfile.write(bytes(json.dumps(currencyData), 'utf-8'))
		return 

	def sendBadHeaderResponse(self, msg):
		self.send_response(400, message = msg)
		self.send_header('Content-type', 'text/plain')
		self.send_headers()
		return
	def sendGoodHeaderResponse(self):
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
	
	def getCurrentTimeRFC3339(self):
		now = datetime.datetime.utcnow() - timedelta(hours=12)
		return now.isoformat("T") + "Z"
