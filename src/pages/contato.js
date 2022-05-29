import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

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
      <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
          <div class="w-full xl:w-3/4 lg:w-11/12 flex">
            <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg login_img_section"></div>
            <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div class="px-8 mb-4 text-center">
                <h3 class="pt-4 mb-2 text-2xl">Cola com tio Hemer</h3>
                <p class="mb-4 text-sm text-gray-700">
                  Vôos Duplos • Coaching • Viagens
                </p>
              </div>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Escreva seu endereço de e-mail"
                  />
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Entrar em contato
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./register.html"
                  >
                    Inscrever-se para receber notícias.
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                  >
                    {/* Already have an account? Login! */}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 p-8 ">
      </div>
    </Layout>
  )
}
