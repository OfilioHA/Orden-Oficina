from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_praetorian import Praetorian, auth_required
from sqlalchemy.inspection import inspect
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__,
    template_folder = os.getenv("TEMPLATE_DIR"),
    static_folder   = os.getenv("STATIC_DIR") 
)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
app.config["JWT_ACCESS_LIFESPAN"] = {"hours": int(os.getenv("JWT_ACC_LFSPN"))}
app.config["JWT_REFRESH_LIFESPAN"] = {"days": int(os.getenv("JWT_REF_LFSPN"))}
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.getenv("DB_ADDR")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = os.getenv("TRACK_MOD")

db = SQLAlchemy(app)
guard = Praetorian()
cors = CORS()

# Init all flask extensions
from models.user import User

migrate = Migrate(app, db)
guard.init_app(app, User)
cors.init_app(app)
db.init_app(app)

from controllers.personalController import *
from controllers.taskController import *

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

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")
