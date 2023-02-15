
from flask import Flask, request, redirect, url_for, flash, render_template,jsonify,json


app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def my_form_post():
    if request.method == 'POST':

       return render_template('form.html')
@app.route('/form.html')
def my_form():
    return render_template('form.html')
@app.route('/')
def reg():
    return render_template('index.html')
@app.route('/index.html')
def reg1():
    return render_template('index.html')

@app.route('/firebase.js')
def fir():
    return render_template('firebase.js')








if __name__ == "__main__":
    app.run(debug=True)
