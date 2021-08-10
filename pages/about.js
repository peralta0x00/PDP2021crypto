import Layout from '../components/layout'
import myStyles from '../styles/styles.module.css'	
import NextLink from 'next/Link'
export default function About(){
   return (
	<Layout>
		<div className = {myStyles.aboutPage}>
			<h1>About Page</h1>
			<p>Created by Kevin Peralta during summer 2021<br/><br/>
			   Built using Next.js (React) for front-end, Nomics API & Python
			   for backend;&nbsp;
			   <Link href="https://github.com/recharts/recharts">
			   <a>Recharts</a></Link> for charts<br/><br/>
			   Hosted on Vercel<br/><br/>
			   *All Prices derived from Binance exchange
			</p>				
		</div>
	</Layout>
   )
}
