'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@nextui-org/react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/react'
import { IoMdSunny, IoMdMoon, IoMdHome } from 'react-icons/io'

export default function NavBar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarBrand>
        <Link
          href='/'
          className='flex items-center justify-center gap-3 text-[#1c1c84] dark:text-[#ffbf00]'
        >
          <IoMdHome className='text-xl font-bold' />
          <h2 className='text-large font-bold'>Home</h2>
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Button
            variant='light'
            onPress={onOpen}
            className='text-md font-semibold text-[#1c1c84] dark:text-[#ffbf00]'
          >
            Goals
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size='sm'
            backdrop='blur'
          >
            <ModalContent>
              {onClose => (
                <>
                  <ModalHeader className='flex flex-col gap-1'>
                    Our mission
                  </ModalHeader>
                  <ModalBody>
                    <p className='text-large'>
                      To more easily <b>assess</b> and understand the
                      utilization of resources pertaining to crop production and
                      consumption.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color='danger' variant='light' onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
        <NavbarItem>
          <Button
            href='/about'
            as={Link}
            variant='light'
            className='text-md font-semibold text-[#1c1c84] dark:text-[#ffbf00]'
          >
            How we built it
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Button
            variant='light'
            onPress={onOpen}
            className='text-md mt-5 font-semibold text-[#1c1c84] dark:text-[#ffbf00]'
          >
            Goals
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            href='/about'
            as={Link}
            variant='light'
            className='text-md font-semibold text-[#1c1c84] dark:text-[#ffbf00]'
          >
            How we built it
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
      <div className='flex gap-4'>
        <Button size='md' variant='light' onClick={toggleTheme}>
          {theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
        </Button>
      </div>
    </Navbar>
  )
}
