import DocumentCell from "../DocumentCell"
import React from "react"
import renderer from "react-test-renderer"

describe("<DocumentCell />", () => {
  it("matches the snapshot", () => {
    const component = renderer.create(<DocumentCell />)
    expect(component).toMatchSnapshot()
  })
})
