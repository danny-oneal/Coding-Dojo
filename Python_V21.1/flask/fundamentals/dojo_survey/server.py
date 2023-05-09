from flask import Flask, render_template, request, redirect, session
import base64

app = Flask(__name__)  # Create a new instance of the Flask class called "app"
app.secret_key = "too many secrets"


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def root():
    return render_template("index.jinja")


@app.route("/process", methods=["POST"])
def increment():
    print(request.form)
    session["name"] = request.form["name"]
    session["location"] = request.form["location"]
    session["language"] = request.form["language"]
    if "friend" in request.form:
        session["friend"] = request.form["friend"]
    if "facebook" in request.form:
        session["facebook"] = request.form["facebook"]
    if "linkedin" in request.form:
        session["linkedin"] = request.form["linkedin"]
    session["goal"] = request.form["goal"]
    session["comment"] = request.form["comment"]
    print(session)
    return redirect("/result")


@app.route("/result")
def result():
    return render_template("result.jinja")


if (
    __name__ == "__main__"
):  # Ensure this file is being run directly and not from a different module
    app.run(debug=True)  # Run the app in debug mode.
