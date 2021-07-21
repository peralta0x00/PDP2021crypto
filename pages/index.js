import dynamic from 'next/dynamic'
import Layout from '../components/layout'
import Link from 'next/link'

/*
   runtime (?) linking to library with no server-side building. prior,
   libraryStorage attempted (and failed) on server-side. and attempts
   to run only clientside (if typeof window !== 'undefined')  introduced issues
*/

//defaults to default function, if present. it is present
const DynamicHomePageDisplay = dynamic(() =>
        import ('../lib/cryptoDisplays'),
	{ ssr: false}
)


export default function Home() {
      return (
		<Layout>
			<DynamicHomePageDisplay/>
		</Layout>
      )
}

