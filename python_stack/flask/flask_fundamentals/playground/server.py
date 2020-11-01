from flask import Flask, render_template
app = Flask(__name__)
@app.route('/play')
def index():
    return render_template("index.html", times=3)	

@app.route('/play/<int:times>')
def play_times(times):
    return render_template("index.html", times=times)	

@app.route('/play/<int:times>/<color>')
def play_times_color(times, color):
    return render_template("index.html", color=color, times=times)	

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
