from flask import Flask, make_response, request, jsonify, Response
import breakdown
from calculations import calculate_excess_produce, calculate_nutrition

app = Flask(__name__)


def run_calculations(location: str):
    output = calculate_nutrition()
    print(output)
    return output


def run_breakdown(nutrient: str):
    return jsonify(breakdown.breakdownMacro("data/Merced2021-22.csv", "data/macros.csv", nutrient))

# agvis.biz/is?in=location


@app.route('/is', methods=['GET'])
def get_search():
    try:
        location = request.args.get('in')
        result = run_calculations(location)
        resp: Response = make_response(result, 200)
        resp.headers.add('Access-Control-Allow-Origin', '*')
        return resp
    except Exception as e:
        resp: Response = make_response(str(e), 400)
        resp.headers.add('Access-Control-Allow-Origin', '*')
        return resp

# agvis.biz/isreally?this=nutrient


@app.route('/isreally', methods=['GET'])
def get_breakdown():
    nutrient = request.args.get('this')
    result = run_breakdown(nutrient)
    resp: Response = Flask.make_response(app, result)
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp


if __name__ == '__main__':
    app.run(debug=True)
