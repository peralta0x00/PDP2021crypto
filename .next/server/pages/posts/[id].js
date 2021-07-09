(function() {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 787:
/***/ (function() {

/*import Layout from '../../components/layout'import Head from 'next/head'import { getAllPostIds, getPostData } from '../../lib/posts' import Date from '../../components/date'import utilStyles from '../../styles/utils.module.css'		export default function Post({ postData }) {  return (    <Layout>      <Head>        <title>{postData.title}</title>      </Head>      <article>        <h1 className={utilStyles.headingXl}>{postData.title}</h1>        <div className={utilStyles.lightText}>          <Date dateString={postData.date} />        </div>        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />      </article>    </Layout>  )}//unlike above, include asyncexport async function getStaticPaths() {	const paths = getAllPostIds()	return {		paths,		fallback: false	}}export async function getStaticProps({ params }) {  const postData = await getPostData(params.id)  return {    props: {      postData    }  }}*/

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(787));
module.exports = __webpack_exports__;

})();