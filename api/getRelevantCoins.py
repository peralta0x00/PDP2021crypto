from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
import difflib
import json
from os.path import join

class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		parse = urlparse(self.path.replace("%2c", ","))
		rawQuery = parse_qs(parse[4])
		if("param" not in rawQuery):
			self.sendBadHeaderResponse("Not a good param")
			return
		#what the query (which would hopefully be from a searchbar) is

		theQuery = rawQuery["param"][0]
		self.sendGoodHeaderResponse()
		
		myArr = []
		
		with open(join('data', 'allTickers.txt'), 'r') as myFile:
			for line in myFile:
				myArr.append(str(line.strip('\n').lower()))

		results = difflib.get_close_matches(theQuery, myArr, 10)
		print('result:{}'.format(results))
		self.wfile.write(bytes(json.dumps({"smlrCoins":results}), 'utf-8'))
		return
	
	def sendGoodHeaderResponse(self):
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
		return

	def sendBadHeaderResponse(self, msg):
		self.send_response(400, message=msg)
		self.send_header('Content-type', 'text/plain')
		self.send_headers()
		return

