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
      fluid(maxWidth: 320, maxHeight: 180) {
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
          absolutePath: { regex: "/(jpeg)/" }
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
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 p-8 ">
      {pics.map(image => (
         <div>
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
            style={{ 'border-radius' : '1rem' }}
          />
        </div>
      ))}
      {/* <Img fluid={data.file.childImageSharp.fluid} alt="about" /> */}
      </div>
    </Layout>
  )
}
