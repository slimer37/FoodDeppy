from flask import Flask, request, jsonify

app = Flask(__name__)

# REPLACE WITH DB FUNCTIONS

def fetch(name : str) -> str:
    data = {'name': name, 'raw-ingredients': [{'name': 'potato', 'source': 'x farm'}, {'name': 'salt', 'source': 'y factory'}]}
    return jsonify(data)

def search(query : str) -> list[str]:
    return ["query", query]
    

@app.route('/food-item', methods=['GET'])
def get_food_item():
    name = request.args.get('name')
    return fetch(name)

@app.route('/search', methods=['GET'])
def get_search():
    query = request.args.get('query')
    return search(query)

if __name__ == '__main__':
    app.run(debug=True)