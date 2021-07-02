from http import HTTPStatus
from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):
   def do_GET(self):
      #get, as reminder, simply requests data; doesn't modify
      self.send_response(200);
      self.send_header('Content-type', 'text/plain')
      self.end_headers()
      self.wfile.write(str(datetime.now().strftime('%Y-%m-%d %H:%M:%S')).encode())
      return
