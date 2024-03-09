'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react'
import { IoMdMoon } from 'react-icons/io'
import { IoMdSunny } from 'react-icons/io'

export default function NavBar() {
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
    <Navbar>
      <NavbarBrand>
        <Link href='/' className='font-bold text-large'>
          Home
        </Link>
      </NavbarBrand>
      <div className='flex gap-4'>
        <Button size='md' variant='light' onClick={toggleTheme}>
          {theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
        </Button>
      </div>
    </Navbar>
  )
}
