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
      className: 'text-blue-500 dark:text-red-500'
    },
  ]
  return (
    <div className='flex h-20 flex-col items-center justify-center font-regular text-md'>
      <TypewriterEffect words={words}/>
    </div>
  )
}
