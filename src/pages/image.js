import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

/*
  1. write query 
  2. pass data into img component
*/

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/(jpg)/" }
        }
      ) {
        totalCount
        edges {
          node {
            name
            ...squareImage
            # childImageSharp {
            #   fluid(maxWidth: 915, quality: 70) {
            #     aspectRatio
            #     ...GatsbyImageSharpFluid_withWebp
            #   }
            # }
          }
        }
      }
      file(relativePath: { eq: "about.jpg" }) {
        ...squareImage
        # childImageSharp {
        #   fluid {
        #     base64
        #     aspectRatio
        #     src
        #     srcSet
        #     sizes
        #   }
        # }
      }
    }
  `)
  const pics = data.allFile.edges
  return (
    <Layout>
      {pics.map(image => (
        <Img
          key={image.node.childImageSharp.fluid.src}
          fluid={image.node.childImageSharp.fluid}
          // style={{ margin: '3rem 0' }}
        />
      ))}
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="about" /> */}
    </Layout>
  )
}
