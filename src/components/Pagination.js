import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: -2em auto 0;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5em 2em;
  a {
    background: #eb8555;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #fff;
    padding: 1em;
    border-radius: 1rem;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: #161616;
      background-color: #f4d38b;
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 3;
`

const PageIndicator = styled.span`
  color: gray;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  padding: 1em 1.5em;
  z-index: -1;
  opacity: 0.7;
`

class Pagination extends React.Component {
  render() {
    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const isNotPaginated = isFirst & isLast

    const prevPageNum = currentPage - 1 === 1 ? `/blog` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === "string" ? `/tag/${slug}` : ""
    const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
    const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`

    return (
      <Wrapper>
        {!isFirst && (
          <PreviousLink to={prevPageLink}>&#8592; Volgende pagina</PreviousLink>
        )}
        {!isNotPaginated && (
          <PageIndicator>
            {currentPage}/{numPages}
          </PageIndicator>
        )}
        {!isLast && (
          <NextLink to={nextPageLink}>Volgende pagina &#8594;</NextLink>
        )}
      </Wrapper>
    )
  }
}

export default Pagination
