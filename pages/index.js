import dynamic from 'next/dynamic'
import Layout from '../components/layout'
import Link from 'next/link'

/*
   runtime (?) linking to library with no server-side building. prior,
   libraryStorage attempted (and failed) on server-side. and attempts
   to run only clientside (if typeof window !== 'undefined')  introduced issues
*/
const DynamicCryptoPrefFetchComponent = dynamic(() =>
        import ('../lib/cryptos'),
	{ ssr: false}
)


export default function Home() {
      return (
		<Layout>
			<DynamicCryptoPrefFetchComponent/>
		</Layout>
      )
}

