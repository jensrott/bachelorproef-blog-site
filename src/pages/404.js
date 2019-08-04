import React from "react"

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <p>Woops! No page for: {location.pathname} </p>
    </div>
  )
}

export default NotFoundPage
