import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {RiCameraLensFill} from 'react-icons/ri';

const Navbar = () => {

  const [nav,setNav] = useState(false)

    const [color,setColor] = useState('transparent')

    const [textColor,setTextColor] = useState('white')


  const handleNav =() =>{
      setNav(!nav)
  }
  useEffect(() => {

    const changeColor = () => {
        if(window.scrollY >=90){
            setColor('#ffffff')
            setTextColor("#000000")
        }
        else{
            setColor('transparent');
            setTextColor("#ffffff")
        }
    }
    
    window.addEventListener('scroll',changeColor)
  },[]);

  return ( 
    <div style ={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white text-2xl'>
            <Link href = '/'> 
            <h1 style ={{color: `${textColor}`}} className='font-bold text-4xl flex justify-around logo-font'>

           Rishav&apos;s <RiCameraLensFill size={40} className='mx-2'/>
            
            </h1> 
            </Link>
            
            <ul style ={{color: `${textColor}`}} className='hidden sm:flex text-2xl'>
                <li className='p-4 hover:text-gray-300'>
                    <Link href = '/'>Home</Link>
                </li>
                <li className='p-4 hover:text-gray-300'>
                    <Link href = '/#gallery'>Gallery</Link>
                </li>
                <li className='p-4 hover:text-gray-300'>
                    <Link href = '/work'>Work</Link>
                </li>
                <li className='p-4 hover:text-gray-300'>
                    <Link href = '/contact'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}

            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? ( <AiFillCloseCircle size={20} style ={{color: `${textColor}`}} />) : (<GiHamburgerMenu size={20} style ={{color: `${textColor}`}} />)}
                </div>
                {/* Mobile Menu */}
                
                <div className= {nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/80 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/50 text-center ease-in duration-300'} >
                    <ul>

                    <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/'>Home</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/#gallery'>Gallery</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/work'>Work</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/contact'>Contact</Link>
                </li>
                    </ul>
                
            </div>

        </div>
    </div>
  )
}

export default Navbar