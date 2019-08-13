import React, { Component } from "react"
import Container from "../components/Container"
import Layout from "../components/Layout"
import landingLogo from "../assets/svg/undraw_smart_home.svg"
import gezinLogo from "../assets/svg/undraw_i_can_fly.svg"
import blogLogo from "../assets/svg/undraw_blog_1.svg"
import constructionLogo from "../assets/svg/undraw_under_construction.svg"

import { Link } from "gatsby"

import "./styles/index.css"
import "../components/helpers/bootstrap-grid.css"

class Index extends Component {
  scrollDown() {
    window.scroll({
      top: window.screen.height,
      left: 0,
      behavior: "smooth",
    })
  }
  render() {
    return (
      <Layout>
        <section className="section-1">
          <Container>
            <div className="row">
              <div className="col-lg-6 col-md-6 center-vertical">
                <div className="landing-title">Jouw domotica starterskit</div>
                <div className="landing-button">
                  <button onClick={() => this.scrollDown()} className="button">
                    Lees meer
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 hidden-sm hidden-xs">
                <img
                  className="landing-image"
                  src={landingLogo}
                  alt="landing"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="section-2">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <h1 className="landing-title-2">Introductie tot domotica</h1>
                <p className="landing-text-2">
                  Deze website dient als leidraad tot de mogelijkheden met
                  domotica. <br />
                  Via onderstaande onderdelen kunt u meer informatie verkrijgen.{" "}
                </p>
              </div>
            </div>
            <div className="row mb-3-5">
              <div className="col-lg-4 mobile-bottom">
                <Link to="/about" className="home-card">
                  <h1> Introductie</h1> <br />
                  <img src={gezinLogo} alt="" />
                </Link>
              </div>
              <div className="col-lg-4 mobile-bottom">
                <Link to="/blog" className="home-card">
                  <h1> Blog </h1>
                  <br />
                  <img src={blogLogo} alt="" />
                </Link>
              </div>
              <div className="col-lg-4 mobile-bottom">
                <a href="#" className="home-card">
                  {" "}
                  {/* Netlify url */}
                  <h1>Demonstrator</h1> <br />
                  <img src={constructionLogo} alt="" />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default Index
