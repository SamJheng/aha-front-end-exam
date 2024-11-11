
import Button from '../components/button';
import Input from '../components/input';
import RadiusButton from '../components/radius-button';
import Slider from '../components/slider';

import { useState } from 'react';

function Showacse() {
  const [resultPerPage, setResultPerPage] = useState<number>(5)

  return (
    <div className='flex justify-center'>
      <div className='container pt-4'>
        <div className='mb-4'>Button</div>
        <div className=' mb-4 w-[725px]'>
          <Button variant='contained'>
            BUTTON
          </Button>
        </div>
        <div className=' mb-4 w-[725px]'>
          <Button variant='outlined'>
            BUTTON
          </Button>
        </div>
        <div className=' mb-4 w-28'>
          <RadiusButton variant='contained'>
            Outlined
          </RadiusButton>
        </div>
        <div className=' mb-4 w-28'>
          <RadiusButton variant='outlined'>
            Contained
          </RadiusButton>
        </div>
        <div className='mb-4'>Input</div>
        <div className='w-[725px] h-16'>
          <Input placeholder='key on'></Input>
        </div>
        <div className='mb-4'>Slider</div>
        <Slider setResultPerPage={setResultPerPage}></Slider>
      </div>
    </div>
  )
}

export default Showacse
