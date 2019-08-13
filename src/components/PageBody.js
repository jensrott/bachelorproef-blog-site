import React from "react"
import styled from "styled-components"
require("prismjs/themes/prism.css")

const Body = styled.div`
  margin: 3rem auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    font-weight: bold;
    color: ${props => props.theme.colors.light};
    &:hover {
      color: ${props => props.theme.colors.light};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: outside;
      line-height: 1.25;
      margin: 1rem;
      padding-left: 0.5rem;
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: outside;
      line-height: 1.25;
      margin: 1rem;
      padding-left: 0.5rem;
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.grey};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.grey};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.grey} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
