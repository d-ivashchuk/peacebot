import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/Hero/Hero'



const IndexPage = () => (
  <>
    <Hero />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
