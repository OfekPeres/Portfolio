import React from "react"
import styled from "styled-components"

import { Card, CardGrid } from "./card"

// Import images for all cards
import amazon_logo from "../Images_and_Videos/Amazon/amazon_logo.png"

import water_droplet from "../Images_and_Videos/Fluids/WaterDroplet.jpg"


const amazonData = {
  title: "Amazon Web Services",
  paragraphs: ["Certified Solutions Architect - Associate"],
  image: amazon_logo,
  alt: "The amazon logo in orange",
  to: "Amazon",
}

const fluidsData = {
  title: "Complex Fluids Group",
  paragraphs: ["Rheology", "Data Science - Python"],
  image: water_droplet,
  alt: "A water droplet",
  to: "Fluids",
}

const data = [amazonData, fluidsData]

const Welcome = styled.h2`
  grid-row: 1;
  grid-column: 1/-1;
  justify-self: center;
  font-family: "Alegreya", serif;
  font-weight: normal;
`

const ProjectGrid = ({ inputs }) => {
  const output = inputs.map(
    ({ title, paragraphs, image, alt, backgroundColor, to }) => {
      return (
        <Card
          title={title}
          paragraphs={paragraphs}
          image={image}
          alt={alt}
          backgroundColor={backgroundColor}
          to={to}
        ></Card>
      )
    }
  )
  return (
    <CardGrid>
      <Welcome>Click on any of the work summaries to learn more!</Welcome>
      {output}
    </CardGrid>
  )
}

export default () => <ProjectGrid inputs={data}></ProjectGrid>
