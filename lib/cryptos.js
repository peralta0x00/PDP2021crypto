import useSWR, {mutate} from 'swr'
import myStyles from '../styles/styles.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const fetcher = url => fetch(url).then(res => res.json());

export default function getCurrentCryptos() {
   if(localStorage.getItem('myCryptos') === null) {
        localStorage.setItem('myCryptos', 
			     JSON.stringify( {"cryptos": ["btc", "eth", "bat",
					      "usdt", "doge", "xrp"]}))
   }
   //now surely there's cryptos?
   var pairs = JSON.parse(localStorage.getItem("myCryptos"))["cryptos"]
   var allCryptosData = {}
   allCryptosData = getCryptosInfo(pairs)
   //is this the best way to approach this?
   if(allCryptosData === null){
	return <p>"loading..."</p>
   }
   console.log(allCryptosData)
   return (
	<div className = {myStyles.mainGrid}>
		{pairs.map((aCrypto,index) => (
			<div className = {myStyles.tile}>
			  <img align="top" className = {myStyles.srcImage}src = {allCryptosData[index]["logo_url"]}></img>
  			   <Link key={index}href = {"cryptoDetailed/" + aCrypto}>
				<a key={aCrypto}  >{aCrypto}</a>
			   </Link>
			   <div>Price: {allCryptosData[index]["price"]}</div>
			   <div> Volume:{allCryptosData[index]["1d"]["volume"]}</div>
			</div>
		))}	
	</div>			
   )
}

export function getCryptosInfo(query)
{    
    var generalAPIPoint = "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?" //"http://localhost:3000/api/getCryptoInfo?"
    for(var index in query)
    {
 	generalAPIPoint += ("coin" + index + "=" + query[index]) + "&"
    }
    const {data, error} = useSWR(generalAPIPoint, fetcher)

    if(!data) { 
       return null
    }
    return data
}
