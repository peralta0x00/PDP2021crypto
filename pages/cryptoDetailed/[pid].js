import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import useSWR from 'swr'
import React from 'react'
import { Sparklines, SparklinesLine} from 'react-sparklines'
import myStyles from '../../styles/styles.module.css'
//const getCryptoCall =  "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params="
const getCryptoCall = "http://localhost:3000/api/getCryptoInfo?params="
const getTACall = "http://localhost:3000/api/getTAIndicators?params="
const fetcher = url => fetch(url).then(res => res.json());

const getData = (endpoint) => {
	const {data} = useSWR(endpoint, fetcher)
	return data
}

export default function DetailedCrypto() {
        const router = useRouter()
        const billion = 1000000000
	//url query?
	const { pid } = router.query
        //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.
	if( pid !== undefined) {
		const data = getData(getCryptoCall + pid + "&priceHist=true" + "&priceInterv=365d")
		const taDATA = getData(getTACall + pid) 

		if(!data || !taDATA) return <Layout>Loading content..."</Layout>
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
					<div id="sprk">
					<Sparklines data={data[0]["prices"]}>
						 <SparklinesLine color ="white"/>
               	 			</Sparklines>
					<Sparklines data={taDATA["20dMA"]}>
						<SparklinesLine color ="red"/>
					</Sparklines>
					</div>


				   <div className={myStyles.side}>
					<h1>About {data[0]["name"]}</h1>

					All time high: {data[0]["high"]}<br/><br/>
					# circulating: {data[0]["circulating_supply"]}<br/><br/>
				        First trade:   {data[0]["first_trade"]}
				   </div>
				</div>
			</Layout>
		)
	}
	else{return <Layout><div>Loading content..."</div></Layout> }
}

