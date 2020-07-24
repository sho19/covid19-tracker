import React, { Children } from "react"
import { Link } from "gatsby"
import {graphql} from "gatsby"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS,INLINES,MARKS} from "@contentful/rich-text-types"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const firstRichContent = data.allContentfulRichContent.nodes[0]
  const options = {
    renderNode:{
      [BLOCKS.HEADING_4]:(node,Children)=>(<h4>{Children}</h4>),
      [BLOCKS.EMBEDDED_ASSET]:(node,Children)=> (<img src={`https:${node.data.target.fields.file["en-US"].url}`}/>)
    },
    renderMark:{},
  }
  return(
 <Layout>
   {documentToReactComponents(firstRichContent.content.json, options)}
 </Layout>
 )
}

export const query = graphql`
{
  allContentfulRichContent {
    nodes {
      title
      content {
        json
      }
    }
  }
}
`
export default IndexPage
{/* <Layout>
<SEO title="Home" />
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  <Image />
</div>
<Link to="/page-2/">Go to page 2</Link> <br />
<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
</Layout> */}
