from flask import Flask, render_template, request, jsonify
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()
API_URL = os.getenv("HUGGING_FACE_API_URL")
headers = {'Authorization': f'Bearer {os.getenv("HUGGING_FACE_API_KEY")}'}

app = Flask(__name__