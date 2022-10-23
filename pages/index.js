import React from 'react'
import Desktop from '../components/desktop'
import Home from '../components/home'

const index = () => {
  return (
    <div>
      <span className='block md:hidden'>
      <Home />
      </span>
<span className='hidden md:block'>
      <Desktop />
</span>
      </div>
  )
}

export default index