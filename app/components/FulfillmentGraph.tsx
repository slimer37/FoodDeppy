import React, { PureComponent, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts'

export default function FulfillmentGraph({ mssLabels, mssData, onclick }: any) {
  let data: any = []

  mssLabels.forEach((value: any, index: any, arr: any) => {
    data.push({
      name: value,
      mss: mssData[index]
    })
  })

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
    <BarChart
      onClick={onclick}
      width={windowDimensions.width * 0.8}
      height={windowDimensions.width * 0.3}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis
        dataKey='name'
        tick={{ fill: theme === 'dark' ? 'white' : 'black' }}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke='#000' />
      <Bar dataKey='mss' fill={theme === 'dark' ? '#ffbf00' : '#1c1c84'} />
    </BarChart>
  )
}
