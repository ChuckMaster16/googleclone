import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response'
import SearchResults from '../components/SearchResults'
import {useRouter} from 'next/router';

function Search({results}) {
    const rout = useRouter();
    console.log(results);
  return (
    <div>
       <Head>
        <title>{rout.query.term}- Google Search</title>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
    {/*Header*/}
    <Header/>
    <SearchResults   results={results}/>
    </div>
  );
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData=false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response  : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    .then((response)=> response.json());

    //pass results to the client after the search has been completed
    return {
        props: {
        results:data,
        }

    }
}