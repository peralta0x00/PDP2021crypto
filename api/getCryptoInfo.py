from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import urllib.request
import json

myKey = "33286a74065de28c4b1e87c24522980d3f373ade"
interval = "&interval=1d"
mainAPI = "https://api.nomics.com/v1/currencies/ticker?key={}&ids=".format(myKey) 
class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		pars = urlparse(self.path)
		#4th index dedicated to query 
		query = parse_qs(pars[4])

		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()

		#create body of response
		if(query is not None):
			decipheredRequest = mainAPI
			for key in query:
				decipheredRequest += query[key][0].upper() + ","
			decipheredRequest += interval
			with urllib.request.urlopen(decipheredRequest) as response:
 				#serialize response into json
				respo = json.load(response)
				self.wfile.write(bytes(json.dumps(respo), 'utf-8'))
		return

       

