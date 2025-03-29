import React from 'react'
import Image from './components/Image'
import Name from './components/Name'
import Description from './components/Description'
import Price from './components/Price'

const firstName = "Apanisile!!"; 
const App = () => {
  return (
    <div>
        <div className='bg-slate-200/50 w-100 shadow-lg drop-shadow-lg p-5 m-10'>  
            <Image />
            <Name />
            <Description />
            <Price />
        </div>
        <div className='p-5 m-10'>
            <h4 className='font-bold'> {firstName? `Hello ${firstName}` : 'Hello there!' } </h4>
            {firstName && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACLeubj24tK3krrbRmHXi5NJfb0ENdBvc2g&s" alt="Profile Image" className='w-30 h-30 rounded-full ' />}
        </div>
    </div>
  )
}

export default App 

