import * as React from "react"
import Button from './components/Button'

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Hell yeah
      </h1>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </main>
  )
}

export default IndexPage
