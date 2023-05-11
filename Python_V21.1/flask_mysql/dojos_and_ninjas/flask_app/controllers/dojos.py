from flask_app import app
from flask_app.models.dojo import Dojo
from flask import render_template, request, redirect


@app.route("/dojos")
def get_dojos():
    all_dojos = Dojo.get_all()
    return render_template("all_dojos.html", all_dojos=all_dojos)


@app.route(
    "/dojos/create", methods=["POST"]
)  # The "@" decorator associates this route with the function immediately following
def create_dojo():
    data = {
        "name": request.form["name"],
    }
    Dojo.create(data)
    return redirect("/dojos")


@app.route(
    "/dojos/<int:id>/view"
)  # The "@" decorator associates this route with the function immediately following
def get_dojo(id):
    data = {"id": id}
    one_dojo = Dojo.get_one(data)
    return render_template("one_dojo.html", one_dojo=one_dojo)
