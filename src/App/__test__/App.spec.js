import App from "../App"
import React from "react"
import renderer from "react-test-renderer"

describe("<App />", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(<App />)
    expect(component).toMatchSnapshot()
  })
})
