import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import favicon from '../public/img/favicon.png'
import '../styles.scss'

const CustomHead = () => {
  return (
    <div>
      <Head>
        <title>MyJapan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" type="image/png" href={favicon} />
        <link rel="shortcut icon" href={favicon}></link>
        <meta name="MyJapan" content="MyJapan Animes Scans News" />
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      </Head>
    </div>
  )
}

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if(!localStorage.getItem('cache'))
      localStorage.setItem('cache', JSON.stringify({}))
  }, [])
  return (
    <>
      <CustomHead />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App