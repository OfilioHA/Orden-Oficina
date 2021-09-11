from flask import Flask, render_template;

app = Flask(__name__);

@app.route('/')
def index():
    return render_template('index.html');

@app.route('/agua')
def agua():
    return render_template('agua.html');

@app.route('/tienda')
def tienda():
    return render_template('tienda.html');

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        debug=True
    );