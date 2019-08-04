import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../assets/svg/lamp_yellow.svg"

import "./helpers/bootstrap-grid.css"
import { shakeAnimation } from "./helpers/animations"
import { NavContainer } from "./NavContainer"

const Header = styled.header`
  background-color: #fafafa;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.175);
  color: #fff;
  padding: 0rem 3rem;
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`

const Li = styled.li`
  margin: 1rem;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  color: #eb8555;
  list-style: none;
`

const Logo = styled.img`
  cursor: pointer;
  transform: rotate(-15deg);
  width: 35px;
  height: auto;
  &:hover {
    animation: ${shakeAnimation} 0.5s ease-out;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: none;
  }
`

const activeLinkStyle = {
  color: "#000",
}

const Menu = () => {
  return (
    <Header>
      <NavContainer>
        <Ul>
          <li style={{ marginRight: "auto" }}>
            <Link to="/" activeStyle={activeLinkStyle}>
              <Logo src={logo} alt="header-logo" />
            </Link>
          </li>
          <Li>
            <Link to="/blog/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </Li>
          <Li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              Over
            </Link>
          </Li>
          <Li>
            <Link to="/demonstrator/" activeStyle={activeLinkStyle}>
              Demonstrator
            </Link>{" "}
            {/* Link to demonstrator site */}
          </Li>
        </Ul>
      </NavContainer>
    </Header>
  )
}

export default Menu
