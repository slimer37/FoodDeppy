'use client'
import React from 'react'
import FulfillmentGraph from '../components/FulfillmentGraph'

export default function MSSGraph() {
  return (
    <div className='space-y-20'>
      <div className='hero flex space-y-3 flex-col items-center text-[#1c1c84] dark:text-[#ffbf00]
      text-4xl font-bold'>
        <h3>
          Data for
        </h3>
        <form>
          <input type="text" className='object-none rounded-md p-2 text-center' placeholder="Place"></input>
        </form>
      </div>
      <section>
        <div className='container flex flex-row items-center justify-center gap-20'>
        <FulfillmentGraph mssLabels={["Protein", "Carbs", "Fat"]} mssData={[1, 2, 3]} />
        </div>
      </section>
    </div>
  )
}
