import "./Carousel.scss"
import React, { useRef } from "react"
import DocumentCell from '../DocumentCell/DocumentCell.js'

const IMAGE_WIDTH = 149 + 12

export default function Carousel({ items }) {
  const documentCells = items.map(item => {
    return <DocumentCell 
      key={item.title} 
      {...item}>
    </DocumentCell>
  })

  const inputEl = useRef(null)

  const onButtonClick = () => {
    const el = inputEl.current
    console.log(el.offsetWidth);

    el.scrollTo({
      left: 100,
      behavior: 'smooth'
    })
  }

  const onRightButtonClick = () => {
    const el = inputEl.current
    console.log(el.offsetWidth)
    const carouselWidth = el.offsetWidth
    
    
    let numberOfImages = carouselWidth / 200
    console.log()
    let amountToScroll = Math.floor(numberOfImages) * IMAGE_WIDTH
    amountToScroll = amountToScroll + el.scrollLeft

    el.scrollTo({
      left: amountToScroll,
      behavior: 'smooth'
    })
  }


  return <div>
    <button 
      className="arrow arrow__left"
      onClick={onButtonClick}
      ></button>
      <section ref={inputEl} className="carousel">
        {documentCells}
      </section>
    <button className="arrow"
    onClick={onRightButtonClick}></button>
  </div>
}
