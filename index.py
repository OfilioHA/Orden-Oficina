from flask import Flask, render_template;
from dotenv import load_dotenv;
import os;

load_dotenv()
DB_ADDR = os.getenv('DB_ADDR')

print(DB_ADDR);
app = Flask(__name__);


@app.route('/')
@app.route('/agua')
@app.route('/tienda')
@app.route('/fumigacion')
def index():
    return render_template('index.html');

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        debug=True,
    );
