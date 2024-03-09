import { useState } from 'react';

import './App.css'
import FulfillmentGraph from './FulfillmentGraph';

function App() {
  const mssLabels = ["Protein", "Carbohydrates",  "Fat"]

  const [data, setData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const request = `http://localhost:5000/info?location=${formData.get('location')}`

    console.log(request)

    fetch(request)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }

  return (
    <>
      <form method="get" onSubmit={handleSubmit}>
        <label>
          Enter Area: <input name="location" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {data ? <FulfillmentGraph mssLabels={mssLabels} mssData={data} /> : <div>- Enter a location -</div>}
    </>
  )
}

export default App