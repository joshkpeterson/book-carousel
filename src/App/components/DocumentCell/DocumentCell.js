import "./DocumentCell.scss"
import React from "react"


export default function DocumentCell({imageSrc}) {
  return <a href="#">
    <img
      className="document-cell__image"
      src={imageSrc}>
    </img>
  </a>
}
