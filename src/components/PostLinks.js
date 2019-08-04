import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background-color: #eb8555;
    color: #fff;
    padding: 1em;
    border-radius: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-decoration: none;
    transition: 0.2s;
    font-weight: bold;
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
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`}>
            &#8592; Vorige
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`/${props.next.slug}/`}>Volgende &#8594;</NextLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
