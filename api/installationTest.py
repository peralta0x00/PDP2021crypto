from http.server import BaseHTTPRequestHandler
import urllib.request
import json

myKey = "33286a74065de28c4b1e87c24522980d3f373ade"
url = "https://api.nomics.com/v1/currencies/ticker?key=" + myKey + "&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&per-page=100&page=1"

class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
		#get data

		with urllib.request.urlopen(url) as response:
        		info = json.load(response)

		respoDict = info[0]

		//is str() redundant? 		
		self.wfile.write(str(respoDict))
		return

