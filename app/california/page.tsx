'use client'
import { useState } from 'react'
import FulfillmentGraph from '../components/FulfillmentGraph'
import { useRouter } from 'next/navigation'

export default function MSSGraph() {
  const mssLabels = ["Protein", "Carbohydrates", "Fat"]

  const router = useRouter()

  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  function fetchMSSData(e: any) {
    e.preventDefault();

    setData(null)
    setError(null)

    // Read the form data
    const form = e.target;

    const location = new FormData(form).get('location')

    const request = `http://localhost:5000/info?location=${location}`

    // Make the url appear to match entry
    router.push(`?location=${location}`)

    fetch(request)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(err => {
        console.error(err)
        setError(`${err.message} (${request})`)
      })
  }

  return (
    <div className='space-y-20'>
      <div className='hero flex space-y-3 flex-col items-center text-4xl font-bold'>
        <h3 className='text-[#1c1c84] dark:text-[#ffbf00]'>
          Data for
        </h3>
        <form method="get" onSubmit={fetchMSSData}>
          <input type="text" className='object-none rounded-md p-2 text-center bg-[#1c1c84] dark:bg-[#262626] text-white dark:text-[#ffbf00]' placeholder="Place" name="location"></input>
        </form>
      </div>
      <section>
        <div className='container flex flex-row items-center justify-center gap-20'>
          {data ? <FulfillmentGraph mssLabels={mssLabels} mssData={data} /> : (error ? <p className='text-[#ff0000]'>Error: {error}</p> : <></>)}
        </div>
      </section>
    </div>
  )
}
