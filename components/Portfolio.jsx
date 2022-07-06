import Image from 'next/image'
import React from 'react'
import img1 from './images/ForWork1.jpeg'
import img2 from './images/ForWork2.jpeg'
import img3 from './images/ForWork3.jpeg'
import img4 from './images/ForWork4.jpeg'
import img5 from './images/ForWork5.jpg'
import img6 from './images/ForWork6.jpeg'
const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto pt-16 text-center'>
        <h1 className='font-bold text-5xl p-4 border-b-4 border-black'>Travel Photos</h1>
        <div>
            <div className='w-full h-full  py-4 mt-2 border-dotted border-b-4 border-black' >
                <Image src={img1}  alt="/" 
                layout='responsive' width='677' height= '451' />
            </div>

            <div className='w-full h-full  py-4  border-dotted border-b-4 border-black'>
            <Image src={img2}  alt="/" 
                layout='responsive' width='677' height= '451'  objectFit='cover'/>
            </div>

            <div className='w-full h-full py-4  border-dotted border-b-4 border-black'>
            <Image src={img3}  alt="/" 
                layout='responsive' width='677' height= '451'  objectFit='cover'/>
            </div>

            <div className='w-full h-full py-4  border-dotted border-b-4 border-black'>
            <Image src={img4}  alt="/" 
                layout='responsive' width='677' height= '451'  objectFit='cover'/>
            </div>

            <div className='w-full h-full py-4  border-dotted border-b-4 border-black'>
            <Image src={img5}  alt="/" 
                layout='responsive' width='677' height= '451'  objectFit='cover'/>
            </div>

            <div className='w-full h-full py-4  border-dotted border-b-4 border-black  '>
            <Image src={img6}  alt="/" 
                layout='responsive' width='677' height= '451'  objectFit='cover'/>
            </div>
        </div>
    </div>
  )
}

export default Portfolio