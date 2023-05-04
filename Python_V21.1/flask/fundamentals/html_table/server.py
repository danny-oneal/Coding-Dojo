from flask import Flask, render_template  # Import Flask to allow us to create our app

app = Flask(__name__)  # Create a new instance of the Flask class called "app"


@app.route(
    "/users"
)  # The "@" decorator associates this route with the function immediately following
def users():
    users = [
        {"first_name": "Michael", "last_name": "Choi"},
        {"first_name": "John", "last_name": "Supsupin"},
        {"first_name": "Mark", "last_name": "Guillen"},
        {"first_name": "KB", "last_name": "Tonel"},
    ]
    return render_template("html_table.jinja", users=users)


@app.route(
    "/play/<num_of_boxes>"
)  # The "@" decorator associates this route with the function immediately following
def play_num_of_boxes(num_of_boxes):
    return render_template(
        "play.jinja", num_of_boxes=int(num_of_boxes), color="darkcyan"
    )


@app.route(
    "/play/<num_of_boxes>/<color>"
)  # The "@" decorator associates this route with the function immediately following
def play_num_and_color_of_boxes(num_of_boxes, color):
    return render_template("play.jinja", num_of_boxes=int(num_of_boxes), color=color)


if (
    __name__ == "__main__"
):  # Ensure this file is being run directly and not from a different module
    app.run(debug=True)  # Run the app in debug mode.
