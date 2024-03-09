import { Button } from '@nextui-org/button'
import { Card, CardFooter, CardHeader, CardBody } from '@nextui-org/card'
import ProductSize from './components/ProductSize'

import FriesCanvas from './components/fries'

export default function Home() {
  return (
    <section className='py-36'>
      <div className='container flex items-center justify-center'>
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
      </div>
    </section>
  )
}
