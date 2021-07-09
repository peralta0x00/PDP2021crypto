import myStyles from '../styles/styles.module.css'
export default function Home() {
   return (
        <div>
           <h1 className= {myStyles.header}>PeraltaCrypto</h1>
   	   <div className={myStyles.mainGrid}>
	      <div className={myStyles.tile}>btcusd</div> 
	      <div className={myStyles.tile}>ethusd</div>
	      <div className={myStyles.tile}>batusd</div>
	      <div className={myStyles.tile}>litecoin</div>
	      <div className={myStyles.tile}>dogeusd</div>
	      <div className={myStyles.tile}>xrpusd</div>
	   </div>
        </div>
   )

}
