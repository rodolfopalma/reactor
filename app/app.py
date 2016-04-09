#!/usr/local/bin python3
# -*- encoding: utf-8 -*-
import smp
from flask import Flask, request, render_template, jsonify
from json import loads

DEBUG = True
SECRET_KEY = 'this is a secret'

app = Flask(
        __name__,
        static_url_path="/static",
        static_folder="./build"
)
app.config.from_object(__name__)


@app.route('/solve', METHODS=['GET'])
def black_box():
    pickers = loads(request.args['pickers'])
    choices = loads(request.args['choices'])

    """
    Aca va la caja negra
    """

    result = dict()
    return jsonify(**result)

if __name__ == '__main__':
    app.run()
