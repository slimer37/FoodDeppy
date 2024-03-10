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
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card'

{
  /* <CardContainer className='inter-var'>
      <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'
        >
          Some graphs and charts
        </CardItem>
        <CardItem translateZ='100' className='mt-4 w-full'>
          <FulfillmentGraph mssLabels={["Protein", "Carbs", "Fat"]} mssData={[1, 2, 3]} />
        </CardItem>
      </CardBody>
    </CardContainer> */
}

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
      {/* <h2 className='text-2xl font-bold dark:text-white'>
        Nutritional Contribution by Item
      </h2>
      /*{' '} */}
      <CardContainer className='inter-var'>
        <CardBody className='group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  '>
          <CardItem
            translateZ='50'
            className='text-xl font-bold text-neutral-600 dark:text-white'
          >
            Nutritional Contribution by Item
          </CardItem>
          <CardItem translateZ='100' className='mt-4 w-full'>
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
              <YAxis
                dataKey='name'
                type='category'
                tick={{ fill: theme === 'dark' ? 'white' : 'black' }}
              />
              <Tooltip />
              <Bar
                dataKey='mss'
                fill={theme === 'dark' ? '#ffbf00' : '#1c1c84'}
              />
            </BarChart>
          </CardItem>
        </CardBody>
      </CardContainer>{' '}
      */
    </div>
  )
}
