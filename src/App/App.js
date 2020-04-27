import "./App.scss"
import Carousel from "./components/Carousel"
import carouselData from "../data/carousel"
import React from "react"

export default function App() {
  return (
    <main className="app">
      Welcome to Scribd!
      <Carousel {...carouselData} />
    </main>
  )
}
