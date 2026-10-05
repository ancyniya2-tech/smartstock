from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/products")
def products():
    return render_template("products.html")

@app.route("/stock")
def about():
    return render_template("stock.html")

@app.route("/sales")
def about():
    return render_template("sales.html")

@app.route("/register")
def about():
    return render_template("register.html")

@app.route("/login")
def about():
    return render_template("login.html")