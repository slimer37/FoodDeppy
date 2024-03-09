'use client'
import React from 'react'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import FriesCanvas from '../components/fries'
import { ThreeDCardDemo } from '../components/3dCard'
const AnimatedPin = () => {
  return (
    <section className='py-36'>
      <div className='container flex flex-row items-center justify-center gap-20'>
        <h3 className='!m-0 max-w-xs !pb-2 text-5xl font-bold text-[#1c1c84] dark:text-[#ffbf00]'>
          Data for Merced, CA
        </h3>
        <ThreeDCardDemo />
      </div>
    </section>
  )
}

export default AnimatedPin
