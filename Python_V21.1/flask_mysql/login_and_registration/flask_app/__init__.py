# __init__.py
from flask import Flask

app = Flask(__name__)
app.secret_key = "too many secret"

DATABASE = "login_and_registration"
