import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({
  data: {
    allSitePage: { nodes: pages }
  }
}) => (
  <Layout>
    {pages.map((page, index) => (
      <>
        <Link key={index} to={page.path}>
          {page.path}
        </Link>
        <br />
      </>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    # allSitePage(filter: { path: { regex: "/services/" } }) {
    allSitePage(sort: { fields: path, order: ASC }) {
      nodes {
        path
      }
    }
  }
`
