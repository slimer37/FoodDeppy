'use client'
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link
} from '@nextui-org/react'
import Image from 'next/image'

const alfred = require('../../public/public-data/alfred.png')

const people = [
  {
    id: 1,
    name: 'David Nguyen',
    designation: 'Arizona State University',
    image: 'https://david-nguyen.vercel.app/assets/avatar-a1ef70c9.jpg'
  },
  {
    id: 2,
    name: 'Alfred Roy',
    designation: 'University of California, Merced',
    image: alfred
  },
  {
    id: 3,
    name: 'David Huang',
    designation: 'Arizona State University',
    image:
      'https://media.licdn.com/dms/image/D5603AQFcWfrO0O1HAw/profile-displayphoto-shrink_400_400/0/1689132857298?e=1715817600&v=beta&t=omo6hdpeOiGNllv1SM4Ta-aFEleaj7W2wkKpUP7jQ04'
  },
  {
    id: 4,
    name: 'Sarthak Madan',
    designation: 'California State University, East Bay',
    image:
      'https://media.licdn.com/dms/image/D5603AQHGiN9Y9T0plg/profile-displayphoto-shrink_400_400/0/1705002180531?e=1715817600&v=beta&t=6cd2tMXi9TcnFoYUyMTtCF0va3XjD7uJ9SjBKGWXKBo'
  }
]

export function Footer() {
  return (
    <div className='mb-10 flex w-full flex-row items-center justify-center'>
      <Navbar>
        <NavbarBrand>
          <Image
            width={50}
            height={50}
            src='https://media.licdn.com/dms/image/C560BAQFbH0YRV6W3vQ/company-logo_200_200/0/1632427367605/hackmerced_logo?e=1718236800&v=beta&t=-Dan2z-YiycgIBK-DKqLIqm9oQpEDMB8SvKj2TcswwM'
            alt='hackmerced logo'
            className='mr-3 rounded-full '
          />
          <h2 className='text-large font-bold text-[#ff5e54]'>HackMerced</h2>
        </NavbarBrand>
        <div className='flex'>
          <AnimatedTooltip items={people} />
        </div>
      </Navbar>
    </div>
  )
}
