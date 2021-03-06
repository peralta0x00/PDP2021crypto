import useSWR, {mutate} from 'swr'
import myStyles from '../styles/styles.module.css'
import Link from 'next/link'
import {useState, isValidating, useCallback, useRef} from 'react'
import dynamic from 'next/dynamic'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip} from 'recharts'


export default function displayCurrentCryptos() {

   const [results, setResults] = useState([])
   const [search, setSearch] = useState('') 
   const [pairs, setPairs] = useState(grabLCLStorageCryptos()) //pretty good at refreshing soon
   var allCryptosMetadata = getCryptosInfo(pairs)
 
   const getRelevantCoins = (currSearch) => {
		const search = currSearch.target.value
		if(search) {
			//fetch simpler than useswr, as prob dont need to hook onto specific search
			const data = fetch("https://pdp-2021crypto.vercel.app/api/getRelevantCoins?param="+search)
			.then(res => res.json())
			.then(res => {
				setResults(res["smlrCoins"])
			})
		}
		else {
			//handles emptying searchquery to ''
			setResults([])
		}
   }
   const addCoinSelection = (e) => {
	try {
		var currStrg = JSON.parse(localStorage.getItem('myCryptos'))["cryptos"]
		if(!currStrg.includes(e.target.innerHTML)) {
			currStrg.push(e.target.innerHTML)
	                localStorage.setItem('myCryptos', JSON.stringify({"cryptos": currStrg}))
			setPairs(currStrg)
		}
		else {
			alert("you already have that!")
		}
	} catch(error) {
		alert(error)
	}
   } 
   
   //<div>1D % change: {Math.round(aCrypto["1d"]["price_change_pct"]*100*100)/100}</div>  
   if(allCryptosMetadata === null ) return <p>"loading..."</p>
   else {
	return (
	<div className={myStyles.homePage}>
		<input id="name" className={myStyles.search} placeholder="Search for coin tickers..." autoComplete = "off" type="text" onChange={getRelevantCoins}/>
			<div> {
				results.map((el, index) => (
					<button onClick={addCoinSelection} key={index}>
						{el}
					</button>
		 	      ))}
			</div>
			<div className = {myStyles.mainGrid}>
			{allCryptosMetadata.map((aCrypto, indx) => (
				<div id={aCrypto["id"]} key={indx} className = {myStyles.tile}>
				  <img align="top" className = {myStyles.srcImage}src = {aCrypto["logo_url"]}></img>
  				   <Link href = {"cryptoDetailed/" + aCrypto["id"]}>
					<a>{aCrypto["name"]}</a>
				   </Link>
				   <div>{aCrypto["price"]}<br/></div>
				<div style={{color:aCrypto["price_color"]}}>{aCrypto["1d"]["price_change_pct"]}%</div>

				    <ResponsiveContainer width='100%' height={130}>
				     <LineChart data={aCrypto["prices"]} dot={false}>
	     	                    <Line type="monotone" dataKey="prc" stroke="white"/>
       		                    <XAxis margin={{top:10}} padding={{right:15}} dataKey="stmp" interval={6} stroke="#999999"angle={-45} />
       	                           <YAxis padding={{top:5}} dx={-5} stroke="#999999" interval={1} domain={["auto", "auto"]}/>
              			      </LineChart>
				   </ResponsiveContainer>
				<div style={{"font-size":"10px"}}> Volume: {aCrypto["1d"]["volume"]}</div>

				</div>
			))}
		</div>
	</div>
   	)
    }
}

//inspired by https://github.com/vercel/swr/issues/192
function useStickyResult (val)
{
	const mutable = useRef()
	if(val !== undefined) mutable.current = val
	return mutable.current
}


function getCryptosInfo(query, doGetPricehist=true, priceInterv="1d") {   
    var call = "https://pdp-2021crypto.vercel.app/api/getCryptoInfo?params="
    const fetcher = url => fetch(url).then(res => res.json());

    for(var index in query) {
 	if(+index + +1 !== query.length) call += query[index] + ",";
        else call += query[index]
    }
    //why would someone not want getPriceHist?..
    if (doGetPricehist) call += "&priceHist=true"
    call += "&priceInterv=" + priceInterv  

    const {data, error, isValidating} = useSWR(call, fetcher)
    const sticky = useStickyResult(data)

    if(!data && !sticky && isValidating) return null

    else if(data) sticky.current =  data

    return sticky.current
}


function grabLCLStorageCryptos(){
	try {
		return JSON.parse(localStorage.getItem("myCryptos"))["cryptos"]
	} catch(error) {
		localStorage.setItem('myCryptos',
                                 JSON.stringify({"cryptos": [
                                                  "eth", "doge","bat","xrp"]}))
		return {"cryptos": ["eth", "bat", "doge", "xrp"]}
	}
}
