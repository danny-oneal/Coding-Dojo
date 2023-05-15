from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.user import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


@app.route("/auth/whoami")
def auth_whoami():
    if "user_id" not in session:
        flash("You must be logged in to access the page", "page")
        return redirect("/")
    else:
        data = {"id": session["user_id"]}
        user = User.read(data)
        return render_template("auth_whoami.html", user=user)


@app.route("/auth/login", methods=["POST"])
def auth_login():
    data = {"email": request.form["email"]}
    user = User.read_by_email(data)
    if not user:
        session.clear()
        flash("Invalid Email/Password", "auth")
        return redirect("/")
    if not bcrypt.check_password_hash(user.password, request.form["password"]):
        session.clear()
        flash("Invalid Email/Password", "auth")
        return redirect("/")

    session["user_id"] = user.id
    return redirect("/auth/whoami")


@app.route("/auth/logout")
def auth_logout():
    session.clear()
    return redirect("/")
