import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import useSWR from 'swr'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import React from 'react'
import myStyles from '../../styles/styles.module.css'


export default function DetailedCrypto() {
	const fetcher = url => fetch(url).then(res => res.json());
		const getData = (endpoint) => {
        	const {data} = useSWR(endpoint, fetcher)
        	return data
	}
	const getCryptoCall =  "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params="
	const getTACall = "https://pdp-2021crypto.vercel.app/api/getTAIndicators?params="
	const router = useRouter()
        const billion = 1000000000

	const { pid } = router.query

	if( pid !== undefined) {
		const data = getData(getCryptoCall + pid + "&priceHist=true" + "&priceInterv=365d")
		const taDATA = getData(getTACall + pid) 
		if(!data || !taDATA) return <Layout>Loading content..."</Layout>
		console.log(taDATA)
		return (
			<Layout>
				<div className={myStyles.mainBar}>
					<img src={data[0]["logo_url"]}></img>
					<p>{data[0]["name"]} 
					    (${data[0]["symbol"]})
					</p>
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
							<p>365d performance</p>
							<ResponsiveContainer width='100%' height={300}>
							<LineChart  data={data[0]["prices"]}>
								<Line type="monotone" dataKey="prc" stroke="white"/>
								<XAxis stroke="white" dataKey="stmp"  />
								<YAxis stroke = "white"/>
								<Tooltip />
							</LineChart>
							</ResponsiveContainer>
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


