from flask import Flask, render_template;
from flask_sqlalchemy import SQLAlchemy;
from flask_migrate import Migrate;
from dotenv import load_dotenv;
import os;

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.getenv('DB_ADDR')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('TRACK_MOD')
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from controllers.personalController import personalList;

@app.route('/')
@app.route('/agua')
@app.route('/tienda')
@app.route('/fumigacion')
@app.route('/configuracion')
@app.route('/login')
def index():
    return render_template('index.html');


@app.route('/test')
def prueba():
    personalList()
    return "queso"

