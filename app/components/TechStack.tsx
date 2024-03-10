'use client'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TracingBeam } from './ui/tracing-beam'

export function TechStack() {
  return (
    <TracingBeam className='px-6'>
      <div className='relative mx-auto max-w-2xl pt-4 antialiased'>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className='mb-10'>
            <p className={twMerge('mb-4 text-xl')}>{item.title}</p>
            <div className='prose  prose-sm dark:prose-invert text-sm'>
              {item?.image && (
                <Image
                  src={item.image}
                  alt='blog thumbnail'
                  height='1000'
                  width='1000'
                  className='mb-10 rounded-lg object-cover'
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: 'Front-end',
    description: (
      <>
        <p className='text-2xl'>
          We utilized Next.js, React, and Tailwind CSS to build our front-end,
          coupled with NextUI and AceternityUI libraries for seamless UI
          components.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Where we got our data',
    description: (
      <>
        <p className='text-2xl'>
          We extraced data from the County of Merced and from the California
          Department of Food and Agriculture, and used it to build our
          visualizations.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]
