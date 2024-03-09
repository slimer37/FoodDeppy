import * as React from 'react';

import './App.css'
import FulfillmentGraph from './FulfillmentGraph';

function App() {
  const mssLabels = ["Protein", "Carbohydrates",  "Fat"]
  const mssData =   [-50,      10,              50]

  return (
    <>
      <label>
        Enter Area: <input name="locationInput" />
      </label>
      <FulfillmentGraph mssLabels={mssLabels} mssData={mssData} />
    </>
  )
}

export default App