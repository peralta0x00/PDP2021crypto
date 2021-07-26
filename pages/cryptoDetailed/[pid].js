import { useRouter } from 'next/router'
//import dynamic from 'next/dynamic'
import Layout from '../../components/layout'
import useSWR from 'swr'
import { Sparklines, SparklinesReferenceLine, SparklinesLine, SparklinesSpots } from 'react-sparklines'
import myStyles from '../../styles/styles.module.css'
const apiCALL =  "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params="
const fetcher = url => fetch(url).then(res => res.json());


export default function detailedCrypto() {
        const router = useRouter()
        const billion = 1000000000
	//url query?
	const { pid } = router.query
        //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.
	if( pid !== undefined) {
		var call = apiCALL + pid + "&priceHist=true"
		call += "&priceInterv=365d"
 		const {data, error} = useSWR(call, fetcher)		
		if(!data) return <Layout>Loading content..."</Layout>
		console.log(JSON.stringify(data[0]))
	        return (
			<Layout>
				<div className={myStyles.mainBar}  >
					<img src={data[0]["logo_url"]}></img>
					<h1>{data[0]["name"]} 
					    (${data[0]["symbol"]})
					</h1>
				</div>
				<div className={myStyles.priceBar}>
					<div>Price: {data[0]["price"]}  
					</div>
					<pre>MKT CAP:  1d VOL:  RANK:<br/>
						{Math.round(data[0]["market_cap"] / billion*100)/100}B    {Math.round(data[0]["1d"]["volume"]/billion*100)/100}B    {data[0]["rank"]}
					</pre> 
                               </div>
  			        <div className={myStyles.mainContent}>
				   <div>
					<Sparklines data={data[0]["prices"]} >
                        	        <SparklinesLine color="white"/>
                	                <SparklinesReferenceLine type="mean"/>
        	                        <SparklinesSpots/>
	                          	</Sparklines>
					<p className={myStyles.help}>365d performance</p>
				   </div>
				   <p className={myStyles.side}>
					<h1>About {data[0]["name"]}</h1>
					All time high: {data[0]["high"]}<br/><br/>
					# circulating: {data[0]["circulating_supply"]}<br/><br/>
				        First trade:   {data[0]["first_trade"]}
				   </p>
				</div>
			</Layout>
		)
	}
	else{return <Layout><div>Loading content..."</div></Layout> }
}










