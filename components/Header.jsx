import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import  Avatar from '../components/Avatar';
import HeaderOptions from "../components/HeaderOptions"
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { IconButton } from '@mui/material';

function Header(className, ) {
    const rout = useRouter();
    const searchInputRef = useRef(null);
    const search = i => {
       i.preventDefault();
       const term = searchInputRef.current.value;
       if(!term) return;
       rout.push(`/search?term=${term}`)
    }
  return (
    <header className='sticky top-0 bg-white ml-10'>
        <div className='flex items-center w-full justify-center px-2'>
        <Image src="https://res.cloudinary.com/chuckmaster/image/upload/v1667561323/myportfolio_img/ggle_ixzzzr.png"
        width={100}
        height={100}
        alt="google"
        className='cursor-pointer'
        onClick={()=>rout.push("/")}/>
        <from className="flex flex-grow border border-gray-200 rounded-full px-6 py-3 ml-10 mr-5 shadow-lg max-w-3xl items-center">
            <input
             ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none"
             defaultValue={rout.query.term}/>
            <CloseIcon
            onClick={()=> (searchInputRef.current.value="")}
             className='text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125'/>
             <p></p>
            <MicIcon className=' text-blue-500 mx-2 border-l-2 hidden sm:inline-flex'/>
            <CameraAltIcon className='text-red-500 hidden sm:inline-flex'/>
            
            <button onClick={search} type="submit" ><SearchIcon className='text-blue-500 mx-2 '/></button>
        </from>
        <div className='flex items-center space-x-3 ml-auto'>
            <IconButton>
                <SettingsOutlinedIcon className='text-gray-500'/>
            </IconButton>        
        <IconButton>
            <AppsIcon className='text-gray-500'/>
        </IconButton>        
        <Avatar 
        className=""
        url={"https://res.cloudinary.com/chuckmaster/image/upload/v1663961707/myportfolio_img/myemoji_huclxl.jpg"}/>
        </div>        
        </div>
        <HeaderOptions/>
         
    </header>
  )
}

export default Header