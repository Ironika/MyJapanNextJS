import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useRouter } from 'next/router'
import { Header, Banner, Footer } from '../components'
import favicon from '../public/img/favicon.png'
import '../styles.scss'


const CustomHead = () => {
  return (
    <div>
      <Head>
        <title>IronikaSpace</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" type="image/png" href={favicon} />
        <link rel="shortcut icon" href={favicon}></link>
        <meta name="description" content="IronikaSpace Animes Scans News Geek Otaku Japan" />
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      </Head>
    </div>
  )
}

const App = ({ Component, pageProps }) => {
  const { pathname } = useRouter()
  const title = (pathname === '/') ? 'Home' : pathname.replace('/', '')

  return (
    <>
      <CustomHead />
      <Header />
      <ParallaxProvider>
        <Banner title={title}/>
        <Component {...pageProps} />
      </ParallaxProvider>
      <Footer />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App