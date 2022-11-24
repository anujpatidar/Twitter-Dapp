import '../styles/globals.css'
import '../lib/hexStyles.css'
import { news } from '../lib/static'
import { TwitterProvider } from '../context/TwitterContext'
import '../lib/client'

function MyApp({ Component, pageProps }) {
  return(
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
  )
}

export default MyApp
