'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
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
import Chart from './chart'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: -3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: -2000,
    pv: -9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: -1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: -3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
]

export function ThreeDCardDemo() {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'
        >
          Some graphs and charts
        </CardItem>
        <CardItem translateZ='100' className='mt-4 w-full'>
          <Chart />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
