import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import styles from '../styles/Home.module.css'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Results results={results}/>

    </div>
  )
}
export async function getServerSideProps(context){
  const genre = context.query.genre;
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=f81980ff410e46f422d64ddf3a56dddd`
  ).then((res) => res.json());
  return {
    props: {
      results: response.results,
    }
  }

}
