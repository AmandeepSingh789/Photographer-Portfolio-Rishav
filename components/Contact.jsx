import React from 'react'


const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4  h-screen'>
       
    <h1 className='text-5xl font-bold text-center p-4 border-b-4 border-black'>Let's work together
    </h1>
    <form method='POST' action="https://getform.io/f/de7f67f0-9374-4f74-bcdf-e8a1fd4e2c20" className='max-w-[600px] m-auto mt-8'> 
        <div className='grid grid-cols-2 gap-2'>
            <input className='border shadow-lg  p-3' type="text" placeholder ="Name" name='name'/>
            <input className='border shadow-lg p-3' type="email" placeholder ="Email" name='email'/>
        </div>
        <div>
            <input  className='border shadow-lg p-3 w-full my-4' type="text" placeholder='Subjects' />
            <textarea className='border shadow-lg p-3 w-full' name='' id="" cols="30" rows ="10" placeholder='Message' />
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </div>
    </form>

    </div>
  )
}
// rishav1@live.in
export default Contact