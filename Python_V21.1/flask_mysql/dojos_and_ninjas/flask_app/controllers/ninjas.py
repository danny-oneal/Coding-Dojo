from flask_app import app
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo
from flask import render_template, request, redirect


@app.route("/ninjas")
def get_ninjas():
    all_ninjas = Ninja.get_all()
    return render_template("all_ninjas.html", all_ninjas=all_ninjas)


@app.route(
    "/ninjas/new"
)  # The "@" decorator associates this route with the function immediately following
def new_ninja_form():
    all_dojos = Dojo.get_all()
    return render_template("new_ninja.html", all_dojos=all_dojos)


@app.route(
    "/ninjas/create", methods=["POST"]
)  # The "@" decorator associates this route with the function immediately following
def create_ninja():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
        "dojo_id": request.form["dojo_id"],
    }
    Ninja.create(data)
    return redirect(f"/dojos/{data['dojo_id']}/view")


@app.route(
    "/ninjas/<int:id>/delete"
)  # The "@" decorator associates this route with the function immediately following
def delete_ninja(id):
    data = {"id": id}
    Ninja.delete(data)
    return redirect("/ninjas")
