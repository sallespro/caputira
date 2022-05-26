import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = ({
  data: {
    allSitePage: { nodes: pages }
  }
}) => (
  <Layout>
    <div className="hidden lg:flex flex-col w-full moeda_img_section
          items-center h-auto">
      <div className="bg-black opacity-20 inset-0 z-0  px-4">
      </div>
        <div className="py-24 justify-end" >
          <h1 className="h-12 text-white  font-semibold text-4xl font-sans">
            Hemerson Rabello de Souza
          </h1>
        </div>
        <div className="py-16">
          <p className="text-white mt-1 justify-end">
            Moeda-MG, Maio/2022
          </p>
        </div>
      
    </div>

   
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
	
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
	
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg login_img_section"
						
					></div>
			
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
