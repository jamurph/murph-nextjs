import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '../styles/scss/global.scss'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  /* import bootstrap js */
  useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
  }, []);

  /* per-page layout */
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
