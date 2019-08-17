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
            Deze website maakt deel uit van mijn bachelorproef. Dit is het
            afsluitend werkstuk van mijn studie Grafische en Digitale Media,
            afstudeerrichting New Media Development. <br />
            De website heeft als hoofddoel om jonge gezinnen wegwijs te maken
            bij het gebruik van domotica in hun eerste woonst en bevat twee
            onderdelen: een blog en een fysische demonstrator. In de beide
            onderdelen heb ik zoveel mogelijk de resultaten van mijn onderzoek
            verwerkt
          </p>
        </div>
        <div className="about-block">
          <h1>
            <Link to="/blog"> Blog</Link>
          </h1>
          <p>
            Uit een enquête is gebleken dat jonge gezinnen vooral geïnteresseerd
            zijn in volgende onderwerpen:
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
          </ol>
          <p>
            Naast het dieper ingaan op deze functionaliteiten zal de blog ook
            een aantal{" "}
            <Link
              style={{
                color: "#707070",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
              to="/tag/tips-&-tricks/"
            >
              Tips & Tricks
            </Link>{" "}
            <br />
            bevatten voor de beginnende domotica gebruiker. <br />
            De blog zal later nog worden aangepast, dus hou deze zeker in de
            gaten!
          </p>
        </div>
        <div className="about-block">
          <h1>
            <Link to="/Demonstrator"> Demonstrator</Link>
          </h1>
          <p>
            De fysische demonstrator is een eerste praktische implementatie van
            een <br />
            aantal domotica functionaliteiten. Dit gedeelte geeft rechtstreeks
            toegang tot deze demonstrator. Het bekijken van de demonstrator
            vereist een login. Registreren is hier ook mogelijk.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default About
