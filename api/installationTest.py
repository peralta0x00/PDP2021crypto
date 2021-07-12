from http.server import BaseHTTPRequestHandler
import urllib.request
import json

myKey = "33286a74065de28c4b1e87c24522980d3f373ade"
url = "https://api.nomics.com/v1/currencies/ticker?key=" + myKey + "&ids=BTC&interval=1d,30d&convert=USD&per-page=100&page=1"

class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		#build header portion of response
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()

		#create body of response
		with urllib.request.urlopen(url) as response:
 			#serialize response into json
			respo = json.load(response)
			
			#respo can be complicated... todo: make a function handling it
			#for now, assumes simple api request (one crypto at a time) 			
			#and potential errors
			respoDict = respo[0]
			self.wfile.write(bytes(json.dumps(respoDict), 'utf-8'))
		
		return

       

