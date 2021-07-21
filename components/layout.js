import Head from 'next/head'
import sty from './layout.module.css'
import Link from 'next/link'
export default function Layout({children}) {
   return (
    <div>
	<title>PeraltaCrypto</title>
        <h1 className= {sty.header}>PeraltaCrypto</h1>
      <main>{children}</main>
    </div>
   )
}
