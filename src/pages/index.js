import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Feature from "../components/Feature"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>To Do</h1>
    <Feature />
  </Layout>
)

export default IndexPage
