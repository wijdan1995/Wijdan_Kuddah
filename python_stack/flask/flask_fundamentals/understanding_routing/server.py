from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'dojo'

@app.route('/say/<name>')
def say_hi(name):
    return 'Hi ' + name

@app.route('/repeat/<int:times>/<text>')
def repeat(times, text):
    return (text + ' ' )*times

@app.errorhandler(404)
def page_not_found(error):
    return 'Sorry! No response. Try again.'


if __name__=="__main__":
    app.run(debug=True) 