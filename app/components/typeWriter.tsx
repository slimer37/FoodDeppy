'use client'
import { TypewriterEffect } from './ui/typewriter-effect'

export function TypewriterEffectDemo() {
  const words = [
    {
      text: 'Description'
    },
    {
      text: 'of'
    },
    {
      text: 'our'
    },
    {
      text: 'app',
      className: 'text-[#1c1c84] dark:text-[#ffbf00]'
    },
  ]
  return (
    <div className='flex h-20 flex-col items-center justify-center font-regular text-md'>
      <TypewriterEffect words={words}/>
    </div>
  )
}
