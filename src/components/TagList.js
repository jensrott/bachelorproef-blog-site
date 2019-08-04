import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: #eb8555;
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    border-radius: 0.5rem;
    border: none;
    &:hover {
      color: #161616;
      background-color: #f4d38b;
    }
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
