import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Post = styled.li`
  box-shadow: rgba(0, 0, 8, 0.08) 0px 4px 8px 0px;
  position: relative;
  list-style-type: none;
  border: none;
  border-radius: 1rem;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? "0 0 100%" : "0 0 49%")};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? "0 0 100%" : "0 0 32%")};
  }
  &:hover {
    background: ${props => props.theme.colors.l_grey};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    .gatsby-image-wrapper {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? "40%" : "60%")};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem 1rem 2rem 1rem;
  line-height: 1.5rem;
`

const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: #808080;
`

const ReadMore = styled.h4`
  margin: 1rem 1rem 0.9rem 1rem;
  color: #808080;
  font-style: italic;
  font-weight: bold;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 0.9rem;
  }
`

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  body: {
    childMarkdownRemark: { timeToRead },
  },
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={"#eeeeee"} />
        <Title>{`${title}`}</Title>
        <Date>{publishDate}</Date>
        {/* <ReadingTime>{timeToRead} min read</ReadingTime> */}
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
        <ReadMore>Lees Meer</ReadMore>
      </Link>
    </Post>
  )
}

export default Card
