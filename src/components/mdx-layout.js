import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import usePathList from "../hooks/usePathList"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Video from "../components/video"
import { useStaticQuery } from "gatsby"

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const MarkdownLayout = ({ children, data }) => {
  const pages = usePathList()
  const { title } = useSiteMetadata()
  const pics = data.allFile.edges

  return (
    <>
      <SEO />
      <header>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3 ">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-700">
                  <div className="inline text-gray-700 text-xl font-bold">
                    {title}
                  </div>
                </div>

                <div className="flex md:hidden">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    aria-label="toggle menu"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="hidden -mx-4 md:flex md:items-center">
                <Link
                  className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                  to="/"
                >
                  home
                </Link>

                {pages.map((page, index) => (
                  <div key={index}>
                    <Link
                      className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-red-600"
                      to={page.path}
                    >
                      {page.path.replace(/^\/|\/$/g, "")}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="hidden lg:flex w-full moeda_img_section
          justify-around items-center">
        <div className="bg-black opacity-20 inset-0 z-0">
        </div>
        <div className="w-full mx-auto flex justify-end h-96">
        </div>
        <div>
          <h1 className="text-white  font-semibold text-4xl font-sans">
            {data.mdx.frontmatter.title}
          </h1>
        </div>
        <div>
          <p className="text-white mt-1 justify-end">
            Alto Jequitibá-MG, Maio/2022
          </p>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center px-4 py-12 mx-auto">
          <div className="flex justify-center p-8">
            {/* <Img
              key={data.mdx.frontmatter.image.childImageSharp.fluid.src}
              fluid={data.mdx.frontmatter.image.childImageSharp.fluid}
              alt="images"
            /> */}
            <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover"
              src="https://drive.cloudbot.com.br/fly/moeda-flight-selfie_HD.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=conector%2F20220525%2F%2Fs3%2Faws4_request&X-Amz-Date=20220525T231625Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=4fcae1991ec2df058780d6748788b0c3d0753bbf9ec63c9f64d15c3e34d30d93" alt="" />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <div className="p-6">
              {/* <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> {data.mdx.frontmatter.title}</h2> */}
              <p className="mt-6 text-gray-500 ">
              O Espírito Santo é uma das áreas de voo mais cênicas que conhecemos. O mais tardar quando você desligar o seu primeiro tubo termal e um labirinto de enormes monólitos de granito, selva atlântica e plantações de café encantadas se abrir à sua frente, você entenderá porque toda a nossa equipe se apaixonou por esta região em uníssono. Além disso, há temperaturas tropicais quentes e nuvens cúmulos fofas e perfeitamente formadas que mostram o caminho.
O circo de competição de parapente inclui há muito tempo esta região em seu programa graças às suas condições confiáveis. Apesar de sua beleza, a região ainda é pouco conhecida entre os "pilotos normais" e outros turistas. Os habitantes locais são ainda mais hospitaleiros e interessados ​​quando um piloto de parapente vem velejando de um país estrangeiro com uma língua incompreensível. No Espírito Santo vivenciamos um Brasil completamente inalterado, principalmente simples e extremamente amigável.
No caminho estamos em veículos off-road com tração nas quatro rodas. Dessa forma, também podemos alcançar locais de decolagem remotos e recuperar com eficiência os pilotos de cross-country que desembarcaram no exterior. As áreas de voo Baixo Guandu e Castelo, conhecidas por suas competições, estão no plano. Mas acima de tudo, as Pancas cenicamente espetaculares e uma série de outros pontos de partida desconhecidos igualmente valiosos estão em nossa rota planejada.
Em termos de voo, a viagem é destinada a pilotos de lazer que preferem voar no tubo termal local, bem como pilotos de cross-country que gostam de decolar em voos de reconhecimento prolongados.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          {/* <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> {data.mdx.frontmatter.title}</h2> */}
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {pics.map(image => (
            <div>
              <Img
                key={image.node.childImageSharp.fluid.src}
                fluid={image.node.childImageSharp.fluid}
                style={{ 'border-radius': '1rem' }}
              />
            </div>
          ))}

        </div>
      </div>

      {/* <Video
          videoSourceURL={data.mdx.frontmatter.videoSourceURL}
          videoTitle={data.mdx.frontmatter.videoTitle}
        /> */}



      {children}
      {/* <footer className="py-2 text-center text-gray-600 text-xs">
         &copy; 2021 - salles pro services
        </footer> */}
    </>
  )
}
export default MarkdownLayout

export const pageQuery = graphql`

  query PostQuery($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        videoSourceURL
        videoTitle
      }
    }
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
