import '../styles/globals.css'
import dynamic from 'next/dynamic'

export default function MyApp({ Component, pageProps }) {
  ssr: false
  return <Component {...pageProps} />
}


