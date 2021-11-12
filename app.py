from flask import Flask, render_template, request;
from flask_sqlalchemy import SQLAlchemy;
from flask_migrate import Migrate;
from flask_praetorian import Praetorian, auth_required;
from flask_cors import CORS;
from dotenv import load_dotenv;
import os;

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': int(os.getenv('JWT_ACC_LFSPN'))}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': int(os.getenv('JWT_REF_LFSPN'))}
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.getenv('DB_ADDR')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('TRACK_MOD')

db = SQLAlchemy(app)
guard = Praetorian()
cors = CORS()

#Init all flask extensions
from models.user import User;

migrate = Migrate(app, db)
guard.init_app(app, User)
cors.init_app(app)
db.init_app(app)

from controllers.personalController import *;

""""
with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username='Yasoob').count() < 1:
        db.session.add(User(
          username='Yasoob',
          password=guard.hash_password('strongpassword'),
          personal_id=1,
          roles='admin'
            ))
    db.session.commit()
"""

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html');

@app.route('/agua')
@auth_required
def authTest():
    return render_template('index.html');

@app.route('/test')
def prueba():
    return "queso"

@app.route('/api/login', methods=['POST'])
def login():
    req = request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200

@app.route('/api/refresh', methods=['POST'])
def refresh():
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200