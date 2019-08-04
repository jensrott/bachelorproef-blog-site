import React from "react"
import Helmet from "react-helmet"
import config from "../utils/siteConfig"
import Layout from "../components/Layout"
import Container from "../components/Container"
import PageTitle from "../components/PageTitle"
import { Link } from "gatsby"
import SEO from "../components/SEO"

import "./styles/about.css"

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>{`Over - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath="about" />

      <Container>
        <PageTitle>Over</PageTitle>
        <div className="about-block">
          <h1>
            <Link to="/blog"> Doel</Link>
          </h1>
          <p>
            De website heeft als hoofddoel om jonge gezinnen een zicht te geven
            op het gebruik van domotica in hun eerste woonst. De resultaten van
            mijn onderzoek heb ik verwerkt in de artikels die te vinden zijn in
            de blog.
          </p>
        </div>
        <div className="about-block">
          <h1>
            <Link to="/blog"> Blog</Link>
          </h1>
          <p>
            Uit mijn enquête is gebleken dat gezinnen vooral geïnteresseerd zijn
            in volgende onderwerpen:
          </p>
          <ol className="custom-orderedlist">
            <li>
              <Link to="/tag/beveiliging/"> Beveiliging</Link>
            </li>
            <li>
              <Link to="/tag/comfort/">Comfort</Link>
            </li>
            <li>
              <Link to="/tag/energie/">Energie</Link>
            </li>
            <li>
              <Link to="/tag/automatisatie/">Automatisatie</Link>
            </li>
            <li>
              <Link to="/tag/hvac/">Hvac</Link>
            </li>
            <li>
              <Link to="/tag/entertainment/">Entertainment</Link>
            </li>
            <li>
              <Link to="/tag/budget/">Budget</Link>
            </li>
          </ol>
          <p>
            Deze onderwerpen heb ik verwerkt in enkele onderzoekende
            blogartikels. <br />
            De blog kan later nog worden aangepast, dus hou deze zeker in de
            gaten!
          </p>
        </div>
        <div className="about-block">
          <h1>
            <Link to="/Demonstrator"> Demonstrator</Link>
          </h1>
          <p>
            Dit demonstreert de mogelijkheden van domotica. <br />
            Het bekijken van de demonstrator vereist een login. Registreren is
            hier mogelijk.
          </p>
        </div>
        <div className="about-block">
          <h1>
            <Link to="/"> Bachelorproef</Link>
          </h1>
          <p>
            Deze website maakt deel uit van mijn bachelorproef. <br />
            Dit is het afsluitend werkstuk voor mijn richting New Media
            Development.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default About
