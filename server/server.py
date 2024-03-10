from flask import Flask, request, jsonify, Response
import subprocess

app = Flask(__name__)

def run_calculations(location : str):
    output = subprocess.Popen(["./a.exe", location], stdout=subprocess.PIPE).communicate()[0].decode()
    
    return jsonify(output)

def run_breakdown(nutrient: str):
    output = subprocess.Popen(["./a.exe", nutrient], stdout=subprocess.PIPE).communicate()[0].decode()
    
    return jsonify(output)

# agvis.biz/is?in=location
@app.route('/is', methods=['GET'])
def get_search():
    location = request.args.get('in')
    result = run_calculations(location)
    resp : Response = Flask.make_response(app, result)
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

# agvis.biz/isreally?this=nutrient
@app.route('/isreally', methods=['GET'])
def get_breakdown():
    nutrient = request.args.get('this')
    result = run_breakdown(nutrient)
    resp : Response = Flask.make_response(app, result)
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp    

if __name__ == '__main__':
    app.run(debug=True)