from flask import Flask, render_template
from api.titanic import titanic_api
from model.titanic import initTitanic

app = Flask(__name__)

# register the titanic api
app.register_blueprint(titanic_api)

# initialize the titanic model at startup
initTitanic()

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)