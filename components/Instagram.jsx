import React from 'react'
import IMG1 from '../public/20180403183505_IMG_2916-01.jpeg';
import IMG2 from '../public/20180403192338_IMG_2943-01.jpeg';
import IMG3 from '../public/20180607064409_Img_3522.JPG';
import IMG4 from '../public/IMG_0672-01.jpeg';
import IMG5 from '../public/IMG_3046.jpg';
import IMG6 from '../public/IMG_20190406_025104_799-01.jpeg';
import Instagramimg from './Instagramimg.jsx';



const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-5xl font-bold '>Follow me on Instagram</p>
        <p className='pb-4 text-3xl mt-2 border-b-4 border-black'>
            <a href="https://www.instagram.com/imrishavv/"  target="_blank" rel="noreferrer">@imrishavv</a> </p>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-2 p-4 mt-2'>
            <Instagramimg socialImg={IMG1}/>
            <Instagramimg socialImg={IMG2}/>
            <Instagramimg socialImg={IMG3}/>
            <Instagramimg socialImg={IMG4}/>
            <Instagramimg socialImg={IMG5}/>
            <Instagramimg socialImg={IMG6} />
            
        </div>
    </div>
  )
}

export default Instagram