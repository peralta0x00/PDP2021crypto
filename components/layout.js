import Head from 'next/head'
import sty from './layout.module.css'
import Link from 'next/link'
export default function Layout({children}) {
   return (
    <div className={sty.header}>
	<title>PeraltaCrypto</title>
        <h1>PeraltaCrypto</h1>
      <main>{children}</main>
    </div>
   )
}
