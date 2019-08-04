import React from "react"
import styled from "styled-components"
import { FaClock } from "react-icons/fa"

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  font-weight: bold;
  margin: 1rem 0;
`

const ReadingTime = styled.p`
  display: flex;
  align-items: center;
`

const FaClockStyling = {
  color: "EB8555",
  fontSize: "1.4rem",
  marginLeft: "0.5rem",
}

const PostDetails = props => {
  return (
    <Wrapper>
      <Date>{props.date}</Date>
      <ReadingTime>
        {props.timeToRead > 1
          ? `️${props.timeToRead} minuten`
          : `️${props.timeToRead} minuut`}
        <FaClock style={FaClockStyling} />
      </ReadingTime>
    </Wrapper>
  )
}

export default PostDetails
