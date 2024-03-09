'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@nextui-org/button'
import { IoMdMoon } from 'react-icons/io'
import { IoMdSunny } from 'react-icons/io'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex gap-4'>
      <Button size='md' variant='light' onClick={toggleTheme}>
        {theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
      </Button>
    </div>
  )
}
