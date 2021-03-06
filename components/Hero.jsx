import React from 'react'
import Link from 'next/link'
import AiOutlineArrowDown from 'react-icons/ai';
const Hero = ({heading,message,button}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* { Overlay} */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='p-5 text-white z-[2] mt-[-10rem] '>
            <h2 className='text-7xl font-bold '>{heading}</h2>
            <p className='py-5 text-3xl my-4'>{message}</p> 

            {button ? <Link href= "/contact"><button className='px-8 py-2 border-2   text-3xl hover:scale-125  hover:bg-neutral-500 transition ease-in-out ;'>Work With Me</button></Link>
              :  <button className='px-8 py-2 border-2   text-3xl hover:scale-125  hover:bg-neutral-500 transition ease-in-out ; hidden'>Email Me !  </button>
  }
            {/* <button className='px-8 py-2 border-2   text-3xl hover:scale-125  hover:bg-neutral-500 transition ease-in-out ;'>
             Book</button>  */}

            
            
            
            
        </div>
    </div>
  )
}

export default Hero