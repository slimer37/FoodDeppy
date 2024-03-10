import { TechStack } from '../components/TechStack'

import React from 'react'

const About = () => {
  return (
    <div className='space-y-20'>
      <div className='hero flex flex-col items-center space-y-3 text-4xl font-bold'>
        <h3 className='text-[#1c1c84] dark:text-[#ffbf00]'>Our tech stack</h3>
      </div>
      <section className='hero flex flex-col items-center space-y-3 text-4xl font-bold'>
        <TechStack />
      </section>
    </div>
  )
}

export default About
