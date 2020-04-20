#Importing Flask to utilise their web framework
from flask import Flask, render_template

#__name__ is used as there is only one module in use, not a package
app = Flask(__name__)

#Rendering the main page, the AR page, when there is no route given
@app.route("/")
def main():
	return render_template('index.html')

#Rendering the create new object form when the route given is /createNewObject
@app.route("/createNewObject")
def createNewObjectForm():
	return render_template('createNewObject.html')

#Rendering the change object details form when the route given is /changeObjectDetails
@app.route("/changeObjectDetails")
def changeObjDetails():
	return render_template('changeObjectDetails.html')

#Rendering the delete object form when the route given is /deleteObject
@app.route("/deleteObject")
def deleteObject():
	return render_template('deleteObject.html')

#__name__ will always be __main__ as there is only one module
if __name__ == '__main__':
	#Running the application, ssl_context is for using https://, debug is used as 
	#this application is only in development, port is chosen to be 8082 and the ip
	#to be 192.168.16.111
	app.run(ssl_context='adhoc',debug=True,port=8082,host='192.168.16.111')
