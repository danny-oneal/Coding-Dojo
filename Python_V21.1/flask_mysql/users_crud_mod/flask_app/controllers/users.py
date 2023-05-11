from flask_app import app
from flask_app.models.user import User
from flask import render_template, request, redirect


@app.route("/users")
def get_users():
    all_users = User.get_all()
    print(all_users)
    return render_template("all_users.html", all_users=all_users)


@app.route(
    "/users/new"
)  # The "@" decorator associates this route with the function immediately following
def new_user_form():
    return render_template("new_user.html")


@app.route(
    "/users/<int:id>/edit"
)  # The "@" decorator associates this route with the function immediately following
def edit_user(id):
    data = {"id": id}
    one_user = User.get_one(data)
    return render_template("edit_user.html", one_user=one_user)


@app.route(
    "/users/<int:id>/update", methods=["POST"]
)  # The "@" decorator associates this route with the function immediately following
def update_user(id):
    data = {
        "id": id,
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
    }
    User.update(data)
    return redirect("/users")


@app.route(
    "/users/<int:id>/delete"
)  # The "@" decorator associates this route with the function immediately following
def delete_user(id):
    data = {"id": id}
    User.delete(data)
    return redirect("/users")


@app.route(
    "/users/create", methods=["POST"]
)  # The "@" decorator associates this route with the function immediately following
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
    }
    User.create(data)
    return redirect("/users")
