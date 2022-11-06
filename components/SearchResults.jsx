import { Result } from 'postcss'
import React from 'react'
import SpecialBtn from './SpecialBtn'

function SearchResults({results}) {
  return (
    <div className='mx-auto w-full px-11 sm:pl[5%] md:pl-[5%] lg:pl-14'>
      <p
      className="text-gray-600 text-md mb-5"
      >About 
        {results.searchInformation?.formattedTotalResults} Results ({results.searchInformation?.formattedSearchTime}  seconds)</p>
      {results.items?.map((result) =>(
        <div
        key={result.link}
        className='max-w-xl mb-8 '>
          <div className='group '>
          
            <a
              href={result.link}
              target='_blank'
              className='text-sml'>{result.formattedUrl}</a>
              <a
              href={result.link}
              target='_blank'
              className='truncate text-xl text-blue-800 front-medium group-hover:underline whitespace-normal'><h2>{result.title}</h2></a>
          </div>
          <p className=''>{result.snippet}</p>
        </div>
      ))} 
      <SpecialBtn/>
    </div>
  )
}

export default SearchResults