'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Chart from './chart'

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
