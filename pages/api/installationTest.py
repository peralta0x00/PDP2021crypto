import urllib.request
import json
myKey = "33286a74065de28c4b1e87c24522980d3f373ade"

url = "https://api.nomics.com/v1/currencies/ticker?key=" + myKey + "&ids=BTC,ETH,XRP&interval=1d,30d&convert=USD&per-page=100&page=1"

with urllib.request.urlopen(url) as response:
	info = json.load(response)

respoDict = info[0]

for key, value in respoDict.items():
	print("key is {} and val is {}".format(key, value))
