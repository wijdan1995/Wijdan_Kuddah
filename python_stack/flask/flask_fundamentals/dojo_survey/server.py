from flask import Flask, render_template, request, redirect, session, flash
import random
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/result', methods = ["POST"])  
def result():
    print(request.form)
    # return redirect('/')
    return render_template("result.html", name=request.form['name'], location=request.form['location'], language=request.form['language'], comment=request.form['comment'])


if __name__=="__main__":
    app.run(debug=True)