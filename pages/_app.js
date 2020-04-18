import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { ParallaxProvider } from 'react-scroll-parallax'
import Router, { useRouter } from 'next/router'
import withGA from "next-ga";
import { Header, Banner, Footer } from '../components'
import favicon from '../public/img/favicon.png'
import ScrollToTop from 'react-scroll-up'
import '../styles.scss'


const CustomHead = () => {
  return (
      <Head>
        <title>IronikaSpace</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" type="image/png" href={favicon} />
        <link rel="shortcut icon" href={favicon}></link>
        <meta name="description" content="IronikaSpace Animes Scans News Geek Otaku Japan" />
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap" defer={true} rel="stylesheet"></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" defer={true} rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.0/TweenMax.min.js"></script>
      </Head>
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
      <ScrollToTop showUnder={160} duration={1000} style={{zIndex: 100}}>
        <i className="fa fa-arrow-circle-o-up scroll-up"></i>
      </ScrollToTop>
      <Footer />
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default withGA("UA-163916215-1", Router)(App)