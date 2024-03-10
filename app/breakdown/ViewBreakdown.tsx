'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function ViewBreakdown({ dataset, title }: any) {
  let data: any = []

  Object.keys(dataset).forEach((value: any, index: any, arr: any) => {
    data.push({
      name: value,
      mss: dataset[value]
    })
  })

  data.sort((a: any, b: any) => b.mss - a.mss)

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl font-bold dark:text-white'>
        Nutritional Contribution by Item
      </h2>
      <BarChart
        layout='vertical'
        width={windowDimensions.width * 0.8} // 90% of window width
        height={data.length * 50} // 90% of window height
        data={data}
        margin={{
          top: 10,
          right: 100,
          left: 100,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis type='number' />
        <YAxis dataKey='name' type='category' tick={{ fill: theme === 'dark' ? 'white' : 'black' }} />
        <Tooltip />
        <Bar dataKey='mss' fill={theme === 'dark' ? '#ffbf00' : '#1c1c84'} />
      </BarChart>
    </div>
  )
}
