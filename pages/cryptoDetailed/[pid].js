import { useRouter } from 'next/router'
import Layout from '../../components/layout'
export default function detailedCrypto() {
        const router = useRouter()
	//url query?
	const { pid } = router.query
	return (
		<Layout>
			<p>Pid: {pid}</p>
		</Layout>
	)
}




