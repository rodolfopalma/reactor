#!/usr/local/bin python3
# -*- encoding: utf-8 -*-
from flask import Flask, send_file


app = Flask(
        __name__,
        static_url_path="/static",
        static_folder="./build"
)

@app.route("/")
def index():
    return send_file("./index.html")
