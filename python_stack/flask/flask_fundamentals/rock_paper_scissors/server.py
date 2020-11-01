from flask import Flask, render_template, request, redirect, session, flash
import random
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/play', methods = ["POST"])   
def play():
    if request.form['which_form'] == 'game':
        session.setdefault('tie', 0)
        session.setdefault('win', 0)
        session.setdefault('lose', 0)
        # session.setdefault('state', '')
        # session.setdefault('player', '')
        # session.setdefault('computer', '')
        choices = ['rock', 'paper', 'scissors']
        computer = random.choice(choices)
        print(request.form)
        player = request.form['choise']
        # session['player'] = player
        # session['computer'] = computer
        flash('You picked '+ player)
        flash('Computer picked '+ computer)
        if player == computer:
            session['tie'] += 1
            session['state'] = 'Tie'
            flash('That was a Tie')
        if player != computer:
            if player == 'paper' and computer == 'scissors':
                session['lose'] += 1
                flash('You Lost!')
            if player == 'rock' and computer == 'scissors':
                session['win'] += 1
                flash('You Win!')
            if player == 'paper' and computer == 'rock':
                session['win'] += 1
                flash('You Win!')
            if player == 'scissors' and computer == 'rock':
                session['lose'] += 1
                flash('You Lost!')
            if player == 'scissors' and computer == 'paper':
                session['win'] += 1
                flash('You Win!')
            if player == 'rock' and computer == 'paper':
                session['lose'] += 1
                flash('You Lost!')
    elif request.form['which_form'] == 'reset':
        session.clear()
    
    return redirect("/")


if __name__=="__main__":
    app.run(debug=True)