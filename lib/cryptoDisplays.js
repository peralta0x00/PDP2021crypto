import useSWR, {mutate} from 'swr'
import myStyles from '../styles/styles.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Sparklines, SparklinesReferenceLine, SparklinesLine, SparklinesSpots } from 'react-sparklines'
const fetcher = url => fetch(url).then(res => res.json());
const apiCALL = "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params="


export default function displayCurrentCryptos() {
   var pairs = grabLCLStorageCryptos()
   var allCryptosMetadata = {}
   allCryptosMetadata = getCryptosInfo(pairs, true) //w/o priceInterv param, defaults to 1d
   //is this the best way to approach this?
   if(allCryptosMetadata === null){
	return <p>"loading..."</p>
   }
   else
   {
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
			    <Sparklines data={allCryptosMetadata[index]["prices"]} >
				<SparklinesLine color="white"/>
				<SparklinesReferenceLine type="mean"/>
				<SparklinesSpots/>
                           </Sparklines>
                           <p className={myStyles.help}>24 hour performance</p>
			</div>
		))}	
	</div>
   )
   }
}


export function getCryptosInfo(query, doGetPricehist=false, priceInterv="1d")
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
       console.log("wait...")
       return null
    } 
    console.log("final data: " + data)
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

