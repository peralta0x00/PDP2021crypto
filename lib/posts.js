import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
/*
   cwd = current working dir
   join asks array of strings, so cwd and './posts'
*/
const postsDirectory = path.join(process.cwd(), 'posts')

/*
soon, will need 'getServerSideProps(context)' if need data at request time/need
to pre-render a page whose data must be fetched at request time
*/

export function getSortedDataPosts()
{
   const fileNames = fs.readdirSync(postsDirectory) //from above
   const allPostsData = fileNames.map(fileName => {
	const id = fileName.replace(/\.md$/, '')
	const fullPath = path.join(postsDirectory, fileName)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents)
	return {
		id, 
		...matterResult.data
	}
   })
   return allPostsData.sort(({ date: a}, {date:b}) => {
	if (a<b) {
		return 1
	}
	else if (a>b) {
		return -1
	}
	else {
		return 0
	}
	})
}
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

	
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  //allows for fetching data asynchronously
  const processedContent = await remark()
	.use(html)
	.process(matterResult.content)
  const contentHtml = processedContent.toString()


  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
