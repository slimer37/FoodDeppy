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


const people = [
  {
    id: 1,
    name: 'David Nguyen',
    designation: 'Arizona State University',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
  },
  {
    id: 2,
    name: 'Alfred Roy',
    designation: 'University of California, Merced',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'David Huang',
    designation: 'Arizona State University',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    name: 'Madan',
    designation: 'California State University, East Bay',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
]

export function Footer() {

  return (
    <div className='mb-10 flex w-full flex-row items-center justify-center'>
      <Navbar>
        <NavbarBrand>
          <h2 className='text-large font-bold'>HackMerced</h2>
        </NavbarBrand>
        <div className='flex'>
          <AnimatedTooltip items={people} />
        </div>
      </Navbar>
    </div>
  )
}
