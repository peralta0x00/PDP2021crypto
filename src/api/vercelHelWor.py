from http import HTTPStatus
from http.server import BaseHTTPRequestHandler

class testHandler(BaseHTTPRequestHandler):
   #get, as reminder, simply requests data; doesn't modify
   def do_GET(self):
      self.send_response(200);
      self.send_header('Content-type', 'text/plain')
      self.end_headers()
      self.wfile.write(str("hello world").encode())
      return
