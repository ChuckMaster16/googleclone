import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function HeaderOptions() {
  return (
    <div className='flex border-b'>
        <div className='flex text-gray-500 space-x-6 mt-4 whitespace-nowrap text-xs lg:text-base'>
        <p className='submenu activelink'><SearchIcon className='text-blue-500'/><span className='hidden sm:inline-flex'>All</span> </p>
        <p className='submenu'><SlideshowOutlinedIcon/> <span className='hidden sm:inline-flex'>Videos</span></p>
        <p className='submenu'><ImageOutlinedIcon/><span className='hidden sm:inline-flex'>Images</span> </p>
        <p className='submenu'><LocalOfferOutlinedIcon/><span className='hidden sm:inline-flex'>Shopping</span> </p>
        <p className='submenu'><NewspaperOutlinedIcon/><span className='hidden sm:inline-flex'>News</span> </p>
        <p className='submenu'><MoreVertOutlinedIcon/><span className='hidden sm:inline-flex'>More</span> </p>
        </div>

        <div className='tools'>
            <p className=''>Tools</p>
        </div>
        
    </div>

  )
}

export default HeaderOptions