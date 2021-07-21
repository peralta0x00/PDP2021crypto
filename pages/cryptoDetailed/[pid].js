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
	//url query?
	const { pid } = router.query
        //During prerendering, the router's query object will be empty since we do not have query information to provide during this phase.
	if( pid !== undefined) {
		var call = apiCALL + pid + "&priceHist=true"
		call += "&priceInterv=30d"
		console.log("my call: " + call)
 		const {data, error} = useSWR(call, fetcher)		
		if(!data) return <div>Loading content..."</div>
		console.log(data[0])
	        return (
			<Layout>
				<div className={myStyles.mainBar}  >
					<img src={data[0]["logo_url"]}></img>
					<h1>{data[0]["name"]} 
					    (${data[0]["symbol"]})
					</h1>
				</div>
  			        <div className={myStyles.mainContent}>
				   <div>
						 <Sparklines data={data[0]["prices"]} >
       			                         <SparklinesLine color="white"/>
       		       	        	          <SparklinesReferenceLine type="mean"/>
                       	        		 <SparklinesSpots/>
                       			    	</Sparklines>
				   </div>
				   <p className={myStyles.side}>
					<h1>Crypto Details</h1>
					Curent Price: {data[0]["price"]}<br/><br/>
					ATH: {data[0]["high"]}<br/><br/>
					Current rank: {data[0]["rank"]}<br/><br/>
				   </p>
				</div>
			</Layout>
		)
	}
	else{return <Layout><div>Loading content..."</div></Layout> }
}










