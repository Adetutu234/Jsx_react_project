import React from 'react'
import {product} from '../product'

const Description = () => {
  return (
    <div>
        <h1 className='font-semibold'>{product.description}</h1>
    </div>
  )
}

export default Description
