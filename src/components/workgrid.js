import React from "react"
import styled from "styled-components"

import { Card, CardGrid } from "./card"

// Import images for all cards
import amazon_logo from "../Images_and_Videos/Amazon/amazon_logo.png"
import lockheed_icon from "../Images_and_Videos/LockheedMartin/lm-icon.jpg"
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

const lockheedData = {
  title: "Lockheed Martin",
  paragraphs: ["Software Engineer"],
  image: lockheed_icon,
  alt: "The lockheed icon",
  to: "Lockheed",
}

const data = [lockheedData, amazonData, fluidsData]

const Welcome = styled.h2`
  grid-row: 1;
  grid-column: 1/-1;
  justify-self: center;
  font-family: "Alegreya", serif;
  font-weight: normal;
  text-align: center;
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

const ProjectGridFilled = () => <ProjectGrid inputs={data}></ProjectGrid>
export default ProjectGridFilled
