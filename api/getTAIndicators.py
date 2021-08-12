import numpy as np
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
import datetime
import dateutil.parser
import time
from datetime import timedelta
import json

"""
 work in progress.... can be referenced but likely for errors to come up
"""
myKey = ""
nomicsAPI = "https://api.nomics.com/v1/currencies/sparkline?key={}&ids=".format(myKey)

class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		parse = urlparse(self.path.replace("%2c", ","))
		rawQuery = parse_qs(parse[4])
		if("params" not in rawQuery):
			self.sendBadHeaderResponse("No good params")
			return
		currenc = rawQuery["params"][0].upper()
		self.sendGoodHeaderResponse()
		request = nomicsAPI + currenc

		sinceWhen = ""
		if("priceInterv" in rawQuery):
			sinceWhen = self.getTimeInterv(rawQuery["priceInterv"][0])
		else:
			sinceWhen = self.getTimeInterv("365d")
		request += "&start=" + sinceWhen

		tmp = [float(item) for item in self.get20dMA(request)[0]["prices"]]

		tmp20d = self.calculateMA(np.array(tmp) , 4)
		rtrn20d = [str(item) for item in tmp20d]
		#6.5 day datapoints, so interval of 3 is about 20 days
		self.wfile.write(bytes(json.dumps([{"20dMA": rtrn20d}]), 'utf-8'))
		return


	def get20dMA(self, sprkURL):
		respo = {}
		currencyX = []
		with urllib.request.urlopen(sprkURL) as response:
			respo = json.load(response)

		tmp = calculateMA(respo[0]["prices"])
		#for stmp, stmpIndx in enumerate(respo[0]["timestamps"]):
			#currencyX.append({"20dMAstmp"})
		return None

	def calculateMA(self, data, length):
		return np.array(np.convolve(data, np.ones(length), 'valid'))  /length
	
	def sendGoodHeaderResponse(self):
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()

	def sendBadHeaderResponse(self, msg):
		self.send_response(404, message = msg)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
		return


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

		return (datetime.datetime.utcnow() - delta).isoformat("T") + "Z"
