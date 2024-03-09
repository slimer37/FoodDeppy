'use client'
import { TypewriterEffect } from './ui/typewriter-effect'

export function Typewriter() {
  const words = [
    {
      text: 'A'
    },
    {
      text: 'resource',
      className: 'text-[#1c1c84] dark:text-[#ffbf00]'
    },
    {
      text: 'visualization',
      className: 'text-[#1c1c84] dark:text-[#ffbf00]'
    },
    {
      text: 'tool'
    },
  ]
  return (
    <div className='flex h-20 flex-col items-center justify-center font-regular text-md'>
      <TypewriterEffect words={words}/>
    </div>
  )
}
