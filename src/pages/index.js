import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import './index.styles.css'

export default ({data}) => (
  <Layout>
    <div>
    <h1 className="heading">Akash's <b>B</b>logs</h1>
    <p className="blog-count">{data.allMarkdownRemark.totalCount} Blogs</p>
    <div className="blogs-container">
    {
      data.allMarkdownRemark.edges.map(({node})=>{
        return (
          <div key={node.id} className="blog-content">
            <Link to={node.fields.slug} className={styles.link}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.date}</p>
            </Link>
              <p className="excerpt">{node.excerpt}...</p>
          </div>
        )
      })
    }
    </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
