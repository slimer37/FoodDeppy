from flask import Flask, request, jsonify
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
    return run_calculations(location)

if __name__ == '__main__':
    app.run(debug=True)