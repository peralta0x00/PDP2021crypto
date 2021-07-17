from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
from nomics import Nomics
import json

myKey = "33286a74065de28c4b1e87c24522980d3f373ade"
nomics = Nomics(myKey)

class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		#feels hacky but getting "bad path"
		pars = urlparse(self.path.replace("%2C", ","))
		#4th index dedicated to query
		rawQuery = parse_qs(pars[4])
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()

		#ex: { 'params' : ["btc,bat,doge"]}
		data = nomics.Currencies.get_currencies(ids = rawQuery["params"][0].upper())
		#create body of response
		if(data is not None):
			self.wfile.write(bytes(json.dumps(data), 'utf-8'))
		return

       

