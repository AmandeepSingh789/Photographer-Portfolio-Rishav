import React from 'react'


const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4  h-screen'>
       
    <h1 className='text-4xl font-bold text-center p-4'>Let's work together
    </h1>
    <form method='POST' action="https://getform.io/f/de7f67f0-9374-4f74-bcdf-e8a1fd4e2c20" className='max-w-[600px] m-auto'> 
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



{/* <form method='POST' action="https://getform.io/f/b9409825-63ca-4845-919a-8bc52cc01def" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-7xl font-bold inline border-b-4 border-pink-600 text-gray-300 font-Oswald'>
                    Contact
                    </p>
                    <p className='text-3xl font-bold py-8 text-gray-300'>Submit the form or shoot me an email </p>
                    <p className='text-3xl font-bold  text-gray-300 flex justify-between items-center w-[450px]'> singh.amandeep5665@gmail.com</p>
                    </div>
                    <input className='bg-[#F4F4F4] p-2' type="text" placeholder='Name' name='name' />
                    <input className= ' my-4 p-2 bg-[#F4F4F4] text' type="email" placeholder='Email' name='email' />
                    <textarea name="message"  cols="30" rows="10" className='bg-[#F4F4F4] p-2' placeholder='Message'></textarea>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center hover:scale-125  transition ease-in-out delay-100 '>
                        Let's Talk</button>
        </form> */}

    </div>
  )
}
// rishav1@live.in
export default Contact