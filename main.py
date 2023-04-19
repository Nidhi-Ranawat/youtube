from flask import Flask, render_template
import requests, os
import urllib.request, json

# everything you need is in ur current dir
app = Flask(__name__, template_folder='templates', static_folder='staticFiles')

# adds more functionality to func referenced right below
# ('/') the location route
@app.route('/')
def index():
    # whenever someone goes to the base url sent is returned
    return render_template('scaredy-cat.html')

app.run(host="0.0.0.0", port=80)