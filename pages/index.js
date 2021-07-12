import myStyles from '../styles/styles.module.css'
import Layout from '../components/layout'
import Link from 'next/link'
const pairs = ["btcusd", "ethusd", "batusd", "liteusd", "dogeusd", "xrpusd"]
export default function Home() {
   return (
           <Layout>
   	   <div className={myStyles.mainGrid}>
	      <Link href = "/cryptoDetailed/{pairs[0]}">
		<a className = {myStyles.tile} > {pairs[0]}</a>
	      </Link>
	      <Link href = "/cryptoDetailed/ethusd">
                <a className = {myStyles.tile} > {pairs[1]}</a>
              </Link>
	      <Link href = "/cryptoDetailed/batusd">
                <a className = {myStyles.tile} > {pairs[2]}</a>
              </Link>  	
	      <Link href = "/cryptoDetailed/liteusd">
                <a className = {myStyles.tile} > {pairs[3]}</a>
              </Link> 
	      <Link href = "/cryptoDetailed/dogeusd">
                <a className = {myStyles.tile} > {pairs[4]}</a>
              </Link> 
	      <Link href = "/cryptoDetailed/xrpusd">
                <a className = {myStyles.tile} > {pairs[5]}</a>
              </Link> 
	   </div>
	</Layout>   
   )

}
