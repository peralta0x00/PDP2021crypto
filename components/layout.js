import Head from 'next/head'
import sty from './layout.module.css'
import Link from 'next/link'

export default function Layout({children}) {
   return (
    <div>
	<div className={sty.header}>
		<Link href = "/">
			<a>PeraltaCrypto</a>
		</Link>
	</div>
	<div>{children}</div>
    </div>
   )
}
