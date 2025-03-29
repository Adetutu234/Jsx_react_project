import React from 'react'
import {product} from '../product'

const Image = () => {
  return (
    <div>
        <img src={product.image} alt="images" className='w-100 h-90 bg-contain'/>
    </div>
  )
}

export default Image
