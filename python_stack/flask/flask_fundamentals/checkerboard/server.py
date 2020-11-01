from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html", rows=8, columns=8)	

@app.route('/<int:columns>')
def columns(columns):
    return render_template("index.html", rows=8, columns=columns)	

@app.route('/<int:columns>/<int:rows>')
def columns_rows(columns,rows):
    return render_template("index.html", rows=rows, columns=columns)	


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
