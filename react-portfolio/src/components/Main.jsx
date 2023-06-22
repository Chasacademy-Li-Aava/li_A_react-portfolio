import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'



const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover'src='https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Smithy Smith</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
        <TypeAnimation
      sequence={[
        'Developer',
        2000,
        'Designer',
        2000,
        'Potato',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='cursor-pointer' size={20}/>
                <FaInstagram className='cursor-pointer' size={20}/>
                <FaLinkedinIn className='cursor-pointer' size={20}/>
                <a href ='https://github.com/Chasacademy-Li-Aava' target='blank'><FaGithub className='cursor-pointer' size={20}></FaGithub></a>
            </div>
        </div>
     </div>
   </div>
  );
};

export default Main