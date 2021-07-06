import Head from 'next/head' //for head module..
import { getSortedDataPosts } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is my great website</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
	<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
		 <Link href={`/posts/${id}`}>
    			<a>{title}</a>
  		 </Link>
  		 <br />
  		<small className={utilStyles.lightText}>
    		    <Date dateString={date} />
 		 </small>
	
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
	const allPostsData = getSortedDataPosts()
	return {
		//object syntax below? want all posts 
		props: {
			allPostsData
		}
	}
}
