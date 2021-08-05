import useSWR, {mutate} from 'swr'
import myStyles from '../styles/styles.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip} from 'recharts'
const fetcher = url => fetch(url).then(res => res.json());
const apiCALL = "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params="
//const apiCALL = "http://localhost:3000/api/getCryptoInfo?params="

export default function displayCurrentCryptos() {
   var pairs = grabLCLStorageCryptos()
   var allCryptosMetadata = {}
   allCryptosMetadata = getCryptosInfo(pairs) //w/o priceInterv param, defaults to 1d

   if(allCryptosMetadata === null){
	return <p>"loading..."</p>
   }
   else
   {
   console.log("data now")
   console.log(allCryptosMetadata)
   return (
	<div className = {myStyles.mainGrid}>
		{pairs.map((aCrypto,index) => (
			<div className = {myStyles.tile}>
			  <img align="top" className = {myStyles.srcImage}src = {allCryptosMetadata[index]["logo_url"]}></img>
  			   <Link key={index}href = {"cryptoDetailed/" + aCrypto}>
				<a key={aCrypto}  >{aCrypto}</a>
			   </Link>
			   <div>Price: {allCryptosMetadata[index]["price"]}</div>
			   <div> Volume:{allCryptosMetadata[index]["1d"]["volume"]}</div>
			    <ResponsiveContainer width='100%' height={150}>
			     <LineChart margin = "{ left: 10}" data={allCryptosMetadata[index]["prices"]}>
                                  <Line type="monotone" dataKey="prc" stroke="white"/>
                                  <XAxis dataKey="stmp" interval={5} />
                                  <YAxis padding = {{top:10, left:10}} stroke="white" interval={0} domain={["auto"-50, "auto"]}/>
				  <Tooltip/>
                             </LineChart>
			   </ResponsiveContainer>
			</div>
		))}	
	</div>
   )
   }
}


export function getCryptosInfo(query, doGetPricehist=true, priceInterv="1d")
{    
    var call = apiCALL
    for(var index in query)
    {
 	if(+index + +1 !== query.length) call += query[index] + ",";
        else call += query[index]
    }
   
    if (doGetPricehist) call += "&priceHist=true"
    call += "&priceInterv=" + priceInterv //send regardless? 
    const {data, error} = useSWR(call, fetcher)
    if(!data) { 
       return null
    } 
    return data
}

function grabLCLStorageCryptos()
{
	try {
		return JSON.parse(localStorage.getItem("myCryptos"))["cryptos"].sort()
	} catch(error) {
		localStorage.setItem('myCryptos',
                                 JSON.stringify({"cryptos": ["btc","eth","bat",
                                                  "usdt", "doge", "xrp"]}))
		return JSON.parse(localStorage.getItem("myCryptos"))["cryptos"].sort()
	}
}
