#!/usr/local/bin python3
# -*- encoding: utf-8 -*-

from flask import Flask, request, render_template, jsonify, send_file
from json import loads
from app.smp import StableMatch

DEBUG = True
SECRET_KEY = 'this is a secret'

app = Flask(
        __name__,
        static_url_path="/static",
        static_folder="./build"
)
app.config.from_object(__name__)


@app.route('/')
def index():
    return send_file('index.html')


@app.route('/solve', methods=['GET'])
def black_box():
    datos = loads(request.args['data'])
    passengers, drivers = datos['passengers'], datos['drivers']
    problem = StableMatch(passengers, drivers)
    result = problem.solve()

    return jsonify(**result)

if __name__ == '__main__':
    app.run()
