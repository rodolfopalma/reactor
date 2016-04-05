#!/usr/local/bin python3
# -*- encoding: utf-8 -*-
import os
from app import app

if __name__ == "__main__":
    PORT = os.getenv("PORT", default=8080)
    app.run(
        host="0.0.0.0",
        port=PORT,
        debug=True
    )
