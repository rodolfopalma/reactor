#!/usr/local/bin python3
# -*- encoding: utf-8 -*-
import smp
from flask import Flask, request, render_template
from json import loads


app = Flask(
        __name__,
        static_url_path="/static",
        static_folder="./build"
)


@app.route('/solve', METHODS=['GET'])
def black_box():
    pickers = loads(request.args['pickers'])
    choices = loads(request.args['choices'])

    """
    Aca va la caja negra
    """
    return render_template('result.html', result=result)
