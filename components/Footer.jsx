import React from 'react'
import PublicIcon from '@mui/icons-material/Public';

function Footer() {
  return (
    <footer>
      <div className='px-8 py-3 bg-gray-200 w-screen border-b border-b-gray-400'>
        <p>Mexico <PublicIcon/></p>
      </div>
      <div className='flex justify-between bg-gray-200 text-center space-x-2 text-sm px-1 py-2 md:justify-self-start text-xs'>
        <div className='flex space-x-2'>
          <p className='link'>About</p>
          <p className='link'>Advertising</p>
          <p className='link'>How Search works</p>
        </div >
        <div >
          
        </div>
        <div className='flex space-x-2 md:ml-auto'>
          <p className='link'>Privacy</p>
          <p className='link'>Term</p>
          <p className='link'>Settings</p>
        </div>
      </div>
      
      
    </footer>
  )
}

export default Footer