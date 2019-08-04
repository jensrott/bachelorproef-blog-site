import React from "react"
import { ThemeProvider } from "styled-components"
import Helmet from "react-helmet"
import GlobalStyle from "../styles/global"
import theme from "../styles/theme"
import config from "../utils/siteConfig"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <Menu />
          <div className="siteContent">{children}</div>
          <Footer />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export default Template
