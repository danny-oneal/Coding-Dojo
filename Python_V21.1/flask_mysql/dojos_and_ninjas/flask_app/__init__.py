# __init__.py
from flask import Flask

app = Flask(__name__)
app.secret_key = "too many secret"

DATABASE = "dojos_and_ninjas_schema"