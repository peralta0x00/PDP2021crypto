import Head from 'next/head'
import sty from './layout.module.css'
export default function Layout({children}) {
   return (
    <div>
      <Head>
        <title>PeraltaCrypto</title>
        <h1 className= {sty.header}>PeraltaCrypto</h1>
      </Head>
      <main>{children}</main>
    </div>
   )
}
