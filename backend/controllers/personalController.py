from models.personal import Personal;
from models.user import User;
from models.system import System;
from models.accomplished import Accomplished;
from models.catalogs import Gender;
from flask import jsonify;

def personalList():
    personal = Personal().list();
    return jsonify(personal);   