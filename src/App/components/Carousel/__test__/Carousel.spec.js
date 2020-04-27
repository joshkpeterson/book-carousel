import Carousel from "../Carousel"
import React from "react"
import renderer from "react-test-renderer"

describe("<Carousel />", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(<Carousel />)
    expect(component).toMatchSnapshot()
  })
})
