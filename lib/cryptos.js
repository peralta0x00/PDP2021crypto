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

   return (
	<div className = {myStyles.mainGrid}>
		{pairs.map((aCrypto,index) => (
			<div className = {myStyles.tile}>
			  <img align="top" className = {myStyles.srcImage}src = {allCryptosData[index]["logo_url"]}></img>
  			   <Link key={index}href = {"cryptoDetailed/" + aCrypto}>
				<a key={aCrypto}  >{aCrypto}</a>
			   </Link>
			   <canvas id="myChart"></canvas>

			   <div>Price: {allCryptosData[index]["price"]}</div>
			   <div> Volume:{allCryptosData[index]["1d"]["volume"]}</div>
			</div>
		))}	
	</div>			
   )
}

export function getCryptosInfo(query)
{    
    var call = "http://localhost:3000/api/getCryptoInfo?params="
    for(var index in query)
    {
 	if(+index + +1 !== query.length) call += query[index] + ",";
        if(+index + +1 === query.length) call += query[index]
    }

    const {data, error} = useSWR(call, fetcher)
    if(!data) { 
       return null
    }
    
    return data
}
