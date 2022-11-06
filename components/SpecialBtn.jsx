import React from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';



function SpecialBtn() {
    const rout = useRouter();
    const startIndex = Number(rout.query.start)  || 0;
  return (
    <div>
        <div className='flex justify-center items-center mx-auto max-w-xs'>
           {startIndex >= 10 && (
            <Link href={`/search?term=${rout.query.term}&start=${startIndex - 10}`}>
                <div className='text-blue-500 hover:underline'>
                    <ArrowCircleLeftOutlinedIcon/>
                    <p>Previous</p>
                </div>
            </Link>
           )} 
        
            <h1 className='mx-auto font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-500 via-yellow-500 to-red-600'>Google</h1>
            <Link href={`/search?term=${rout.query.term}&start=${startIndex + 10}`}>
                <div className='text-blue-500 hover:underline'>
                    <ArrowCircleRightOutlinedIcon />
                    <p>Next</p>
                </div>    
            </Link>
                 
        </div>        
    </div>
  )
}

export default SpecialBtn