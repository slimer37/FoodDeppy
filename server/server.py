from flask import Flask, request, jsonify, Response
import subprocess

app = Flask(__name__)

def run_calculations(location : str):
    output = subprocess.Popen(["./a.exe", location], stdout=subprocess.PIPE).communicate()[0]
    output = f"\"{output}\""
    print(output)
    return output

@app.route('/info', methods=['GET'])
def get_search():
    location = request.args.get('location')
    result = run_calculations(location)
    resp : Response = Flask.make_response(app, result)
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

if __name__ == '__main__':
    app.run(debug=True)