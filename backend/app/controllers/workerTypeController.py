
from manage import app;
from flask import jsonify;
from entities.models import PersonalType;
from entities.models import Gender;

@app.route("/personal/types")
def types_list():
    personal_types = PersonalType.query.all();
    personal_types = [personal_type.to_dict() for personal_type in personal_types];
    return jsonify(personal_types);

@app.route("/personal/genders")
def genders_list():
    personal_types = Gender.query.all();
    personal_types = [personal_type.to_dict() for personal_type in personal_types];
    return jsonify(personal_types);
