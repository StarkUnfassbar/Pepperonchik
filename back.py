from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html")

# @app.route("/a")
# def a():
#     return render_template("a.html")

app.run()