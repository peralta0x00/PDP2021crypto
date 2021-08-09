import Head from 'next/head'
import sty from './componStyle.module.css'
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
	<div className={sty.bottomHeader}>
		<Link href = "/about">
			<a id="aboutLink">About</a>
		</Link>
		<div/>
		<Link href ="https://github.com/kevinparalta/PDP2021crypto">		
			<a id = "sourceLink">Source</a> 
		</Link>
        </div>
    </div>
   )
}
