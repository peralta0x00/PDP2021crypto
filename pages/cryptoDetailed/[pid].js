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
	const router = useRouter()
	const { pid } = router.query

	if( pid !== undefined) {
		const data = getData(getCryptoCall + pid + "&priceHist=true" + "&priceInterv=365d")
		if(!data) return <Layout>Loading content... </Layout>
		return (
			<Layout>
				<div className={myStyles.mainBar}>
					<img src={data[0]["logo_url"]}></img>
					<p>&nbsp;{data[0]["name"]} 
					    (${data[0]["symbol"]})
					</p>
				</div>
				<div className={myStyles.priceBar}>
					<div>Price: {data[0]["price"]}  
					</div>
					<pre>MKT CAP:   365d VOL:    RANK:<br/>
						{data[0]["market_cap"]}     {data[0]["365d"]["volume"]}      {data[0]["rank"]}
					</pre> 
                </div>
  			    <div className={myStyles.mainContent}>
					<div>
						<ResponsiveContainer width='100%' height={300}>
						<LineChart  data={data[0]["prices"]}>
							<Line type="monotone" dataKey="prc" stroke="white"/>
							<XAxis stroke="#999999" dataKey="stmp" angle={-45} />
							<YAxis dy={3} stroke = "#999999"/>
							</LineChart>
							</ResponsiveContainer>
							<div>365d performance</div>
							<div style={{color:data[0]["price_color"]}}>{data[0]["365d"]["price_change_pct"]}%</div>
					</div>
					<div className={myStyles.side}>
						<h1>About {data[0]["name"]}</h1>
						<div>All time high: {data[0]["high"]}</div><br/><br/>
						<div>Maximum supply: {data[0]["max_supply"]}</div><br/><br/>
				        <div>First trade:   {data[0]["first_candle"]}</div>
					</div>
				</div>
			</Layout>
		)
	}
	else{return <Layout><div>Loading content..."</div></Layout> }
}


