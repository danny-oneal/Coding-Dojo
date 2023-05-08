from flask import Flask, render_template, request, redirect, session
import base64

app = Flask(__name__)  # Create a new instance of the Flask class called "app"
app.secret_key = "too many secrets"


@app.route(
    "/"
)  # The "@" decorator associates this route with the function immediately following
def root():
    if "view_count" not in session:
        session["view_count"] = 0
    if "counter" not in session:
        session["counter"] = 0

    session["view_count"] = session["view_count"] + 1
    session["counter"] = session["counter"] + (
        session["increment_val"] if "increment_val" in session else 1
    )
    session_cookie = request.cookies.get("session")
    if session_cookie:
        session_val = base64.urlsafe_b64decode(
            f"{session_cookie[0 : session_cookie.index('.')]}==="
        )
    else:
        session_val = ""
    return render_template("index.jinja", session_val=session_val)


@app.route(
    "/destroy-session"
)  # The "@" decorator associates this route with the function immediately following
def destroy_session():
    session.clear()
    return redirect("/")


@app.route("/increment", methods=["POST"])
def increment():
    session["increment_val"] = int(request.form["increment-val"])
    return redirect("/")


if (
    __name__ == "__main__"
):  # Ensure this file is being run directly and not from a different module
    app.run(debug=True)  # Run the app in debug mode.
