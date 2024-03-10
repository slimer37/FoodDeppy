'use client'
import { useState } from 'react'
import ViewBreakdown from './ViewBreakdown'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import NutrientDropdown from './NutrientDropdown'

export default function MSSBreakdown() {
    const location = useSearchParams().get('location')
    const router = useRouter();

    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    let itemNames : Array<string> = []

    function fetchBreakdownData(key: string) {
        setData(null)
        setError(null)

        const request = `http://localhost:5000/isreally?this=${key}`

        // Make the url appear to match entry
        router.push(`?location=${location}&nutrient=${key}`)

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
            <div className='hero flex flex-col items-center text-center'>
                <h3 className='font-bold text-2xl'>Data for <i>{location}</i></h3>
                <h3 className='text-[#1c1c84] dark:text-[#ffbf00] py-3'>BREAKDOWN</h3>
                <NutrientDropdown value={useSearchParams().get('nutrient')} callback={fetchBreakdownData} />
            </div>

            <section>
                <div className='container flex flex-row items-center justify-center gap-20'>
                    {data ? <ViewBreakdown labels={itemNames} dataset={data} /> : (error ? <p className='text-[#ff0000]'>Error: {error}</p> : <></>)}
                </div>
            </section>
        </div>
    )
}
