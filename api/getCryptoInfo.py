from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse
import urllib.request
import json

myKey = "33286a74065de28c4b1e87c24522980d3f373ade"
url = "https://api.nomics.com/v1/currencies/ticker?key={}&ids=".format(myKey) 
#+ myKey + "&ids=BTC&interval=1d,30d&convert=USD&per-page=100&page=1"

class handler(BaseHTTPRequestHandler):
	def do_GET(self):
		#first, deal with url query; 4th index represents deciphered query
		parsed = urlparse(self.path)
		query = parsed[4]

		#build header portion of response
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()

		#create body of response
		#for some reason, query needs to be capitalized (w/o, returns '..='?)
		decipheredRequest = url+query.upper()
		with urllib.request.urlopen(decipheredRequest) as response:
 			#serialize response into json
			respo = json.load(response)

			#respo can be complicated... todo: make a function handling it
			#for now, assumes simple api request (one crypto at a time) 			
			#and potential errors
			respoDict = respo[0]
			self.wfile.write(bytes(json.dumps(respoDict), 'utf-8'))
		
		return

       

