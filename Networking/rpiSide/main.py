from flask import Flask, render_template
import io
import time

app = Flask(__name__)

@app.route("/")
def main():
	return render_template('index.html')

@app.route("/")
def backToMain():
	@app.route("/")

@app.route("/createNewObject")
def createNewObjectForm():
	return render_template('createNewObject.html')

if __name__ == '__main__':
	app.run(ssl_context='adhoc',debug=True,port=8082,host='192.168.16.111')
