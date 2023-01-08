import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/scss/global.scss'
import {useEffect} from 'react'

import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  /* import bootstrap js */
  useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
  }, []);

  /* per-page layout */
  const getLayout = Component.getLayout || ((page) => page);

  return <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-FEBED8HBLD" />
      <Script id="google-analytics" strategy="afterInteractive" >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-FEBED8HBLD');
        `}
      </Script>
    {getLayout(<Component {...pageProps} />)}
  </>;
}

export default MyApp
