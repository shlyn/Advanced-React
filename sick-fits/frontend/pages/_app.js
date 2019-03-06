import App, { Container } from "next/app"
import Page from "../components/Page"

export default function MyApp(props) {
  const { Component } = props
  return (
    <Container>
      <Page>
        <p>Hi I am on every page</p>
        <Component />
      </Page>
    </Container>
  )
}
