'use client'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TracingBeam } from './ui/tracing-beam'
import { useTheme } from 'next-themes'
import { ParallaxScroll } from './ui/parallax-scroll'
const nextjs = require('../../public/tech-stack/nextjs.png')
const nextjsLight = require('../../public/tech-stack/nextjs-light.png')
const react = require('../../public/tech-stack/react.png')
const tailwind = require('../../public/tech-stack/tailwindcss.png')
const python = require('../../public/tech-stack/python.png')
const flask = require('../../public/tech-stack/flask.png')
const flaskLight = require('../../public/tech-stack/flask-light.png')
const threejs = require('../../public/tech-stack/threejs.png')
const threejsLight = require('../../public/tech-stack/threejs-light.png')
const publicData = require('../../public/public-data/data.png')

export function TechStack() {
  const { theme, setTheme } = useTheme()

  const images = [
    theme === 'dark' ? nextjsLight : nextjs, // use the light mode icon if the theme is light
    react,
    tailwind,
    python,
    theme === 'dark' ? flaskLight : flask, // use the light mode icon if the theme is light
    theme === 'dark' ? threejsLight : threejs // use the light mode icon if the theme is light
  ]

  const content = [
    {
      title: 'Our tech stack',
      description: (
        <>
          <div className='-mt-20 mb-10 flex flex-col overflow-hidden'>
            <ParallaxScroll images={images} className='no-scrollbar' />
          </div>
          <p className='text-2xl'>
            We utilized Next.js, React, and Tailwind CSS to build our front-end,
            coupled with NextUI and AceternityUI libraries for seamless UI
            components.
          </p>
        </>
      )
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
      image: publicData
    }
  ]

  return (
    <TracingBeam className='px-6'>
      <div className='relative mx-auto max-w-2xl pt-4 antialiased'>
        {content.map((item, index) => (
          <div key={`content-${index}`} className='mb-10'>
            <p className={twMerge('mb-4 text-xl')}>{item.title}</p>
            <div className='prose  prose-sm dark:prose-invert text-sm'>
              {item?.image && (
                <div className='flex flex-col overflow-hidden'>
                  <Image
                    src={item.image}
                    alt='blog thumbnail'
                    height='1000'
                    width='1000'
                    className='mb-10 rounded-lg object-cover'
                  />
                </div>
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}
