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
        <Link
          href='/'
          className='flex items-center justify-center gap-3 text-[#1c1c84]'
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
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
      <div className='flex gap-4'>
        <Button size='md' variant='light' onClick={toggleTheme}>
          {theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
        </Button>
      </div>
    </Navbar>
  )
}
