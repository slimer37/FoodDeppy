
import { TypewriterEffectDemo } from './components/typeWriter'
import { Link, Button } from '@nextui-org/react'
import { PinContainer } from './components/ui/3d-pin'
import { WavyBackground } from "./components/ui/wavy-background";


export default function Home() {
  return (
    <div>
      <section className='hero flex flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl font-bold text-[#1c1c84] dark:text-[#ffbf00]'>
          AgVis
        </h1>
        <TypewriterEffectDemo />
        <Button
          href='/california'
          as={Link}
          color='primary'
          showAnchorIcon
          variant='shadow'
        >
          Explore the data
        </Button>
      </section>
      <div className='flex h-[40rem] w-full items-center justify-center '>
        <PinContainer title='University of California, Merced'>
          <div className='min-h-500 min-w-500 flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 '>
            <h3 className='!m-0 max-w-xs !pb-2 text-5xl font-bold text-[#1c1c84] dark:text-[#ffbf00]'>
              California
            </h3>
            <div className='mt-5 text-base font-normal'>
              <img src='california-counties.svg' />
            </div>
            <div className='mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
          </div>
        </PinContainer>
      </div>
    </div>
  )
}