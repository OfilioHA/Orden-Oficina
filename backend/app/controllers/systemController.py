from manage import app;
from flask import jsonify;
from entities.models import Area;

@app.route("/systems")
def systems_list():
    systems = Area.query.all();
    systems = [system.to_dict() for system in systems];
    return jsonify(systems);
