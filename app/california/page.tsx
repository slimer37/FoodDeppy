'use client'
import { useState } from 'react'
import FulfillmentGraph from '../components/FulfillmentGraph'
import { useRouter, useSearchParams } from 'next/navigation'

export default function MSSGraph() {
  const mssLabels = ['Protein', 'Carbohydrates', 'Fat']

  const router = useRouter()

  const [data, setData] = useState<number[]>([])
  const [error, setError] = useState<string | null>(null)
  const [location, setLocation] = useState('')

  const fetchMSSData = (event: any) => {
    event.preventDefault()

    console.log(`from location: ${location}`)

    const request = `http://localhost:5000/is?in=${location}`

    // Make the url appear to match entry
    router.push(`?location=${location}`)

    fetch(request)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`Status code ${response.status}`)
      })
      .then(json => {
        const { Proteins, Fats, Carbs } = json
        setData([Proteins, Fats, Carbs])
      })
      .catch(err => {
        console.error(err)
        setError(`${err.message} (${request})`)
      })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  function handleClick() {
    router.push(`/breakdown?location=${location}&nutrient=Protein`)
  }

  return (
    <div className='space-y-20'>
      <div className='hero flex flex-col items-center space-y-3 text-4xl font-bold'>
        <h3 className='text-[#1c1c84] dark:text-[#ffbf00]'>Data for</h3>
        <form onSubmit={fetchMSSData}>
          <input
            type='text'
            className='rounded-md bg-[#1c1c84] object-none p-2 text-center text-white dark:bg-[#262626] dark:text-[#ffbf00]'
            placeholder='Place'
            name='inputLocation'
            onChange={handleInputChange}
          ></input>
        </form>
      </div>
      <section>
        <div className='container flex flex-row items-center justify-center gap-20'>
          {error ? (
            <p className='text-[#ff0000]'>Error: {error}</p>
          ) : data.length > 0 ? (
            <FulfillmentGraph
              onclick={handleClick}
              mssLabels={mssLabels}
              mssData={data}
            />
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  )
}
