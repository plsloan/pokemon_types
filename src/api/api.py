import time
from flask import Flask, jsonify

from helpers import get_types_dict

app = Flask(__name__)


@app.route('/api/time')
def get_current_time():
    return jsonify(time=time.time())


@app.route('/api/types/')
@app.route('/api/types/<type_name>')
def get_type(type_name=None):
    types = get_types_dict()
    if type_name is not None:
        return jsonify(result=types[type_name.lower()])
    else:
        return jsonify(result=list(types.values()))
