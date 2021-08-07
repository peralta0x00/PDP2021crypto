import difflib

myArr = []
with open("allTickers.txt") as myFile:
	for line in myFile:
		myArr.append(str(line.strip('\n').lower()))
	myFile.close()

print('done, size is:{}'.format(len(myArr)))
results = difflib.get_close_matches("bt", myArr, 20)
print('result:{}'.format(results))




