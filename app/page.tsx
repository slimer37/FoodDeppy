import { Card, CardHeader, CardBody } from '@nextui-org/card'
import FriesCanvas from './components/fries'
import { ThreeDCardDemo } from './components/3dCard'
import { TypewriterEffectDemo } from './components/typeWriter'
import California from './components/California'
export default function Home() {
  return (
    <div>
      <section className='flex flex-col items-center gap-5 justify-center hero'>
        <h1 className='text-6xl font-bold'>App Title</h1>
        <TypewriterEffectDemo />
      </section>
      <section className='py-36'>
        <div className='container flex flex-row items-center justify-center gap-20'>
          <Card
            isBlurred
            className='max-w-[610px] border-none bg-background/60 dark:bg-default-100/50'
            shadow='sm'
          >
            <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
              <p className='text-large font-bold uppercase'>French Fries</p>
              <small className='font-regular text-default-500'>McDonalds</small>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <div className='mt-10 flex justify-center gap-6'>
                <FriesCanvas />
              </div>
            </CardBody>
          </Card>
          <ThreeDCardDemo />

          <California/>
        </div>
      </section>
    </div>
  )
}
