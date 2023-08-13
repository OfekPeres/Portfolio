import React from "react"
import styled from "styled-components"

import { Card, CardGrid } from "./card"
// Import images for all cards
import sarr3view from "../Images_and_Videos/SARR/sarrcover.png"
import astar_cover from "../Images_and_Videos/Robotics/astar-card.png"
import qrcode from "../Images_and_Videos/Thesis/QRCodeBlack.png"
import pendulum from "../Images_and_Videos/Inverted_Pendulum/pendulum_logo.png"
import crane from "../Images_and_Videos/Crane/CraneLogo.png"
import benchpress from "../Images_and_Videos/BenchPress/benchpresscard.png"
import dubins_car from "../Images_and_Videos/ControlsVisualization/dubins_car.png"
import word_game_helper from "../Images_and_Videos/WordGameHelper/word_game_helper.png"
import infinite_runner from "../Images_and_Videos/InfiniteRunner/InfiniteRunner.png"
import qrcode_generator from "../Images_and_Videos/QRCodeGenerator/qrcodegenerator.png"

const sarrData = {
  title: "Search and Rescue Robot",
  paragraphs: ["Sensor Fusion", "Autonomous Control"],
  image: sarr3view,
  alt: "The 3-view image of Newt, a search and rescue robot I helped build!",
  to: "SARR",
}

const roboticsData = {
  image: astar_cover,
  paragraphs: [],
  title: "Motion Planning & Localization",
  alt: "An image of the A-star algorithm finding an optimal path thru an obstacle course.",
  to: "Motion Planning",
}
const thesisData = {
  title: "Everfly - Senior Thesis",
  paragraphs: ["Autonomous Control", "Computer Vision", "Motion Planning"],
  image: qrcode,
  alt: "An image of a QR code",
  to: "Thesis",
}
const pendulumData = {
  title: "Rotary Inverted Pendulum",
  paragraphs: ["Modern Controls (LQR)", "Matlab & Simulink"],
  image: pendulum,
  alt: "A cartoon of an inverted pendulum",
  to: "Rotary Inverted Pendulum",
  //   backgroundColor: "#3e6e89",
}
const craneData = {
  title: "Crane Design",
  paragraphs: [
    "Machine Shop (CNC Mill)",
    "Finite Element Analysis",
    "CAD (Creo)",
  ],
  image: crane,
  alt: "An image of a lightweight crane I designed.",
  to: "Crane",
}

const benchpressData = {
  title: "Olympic Bench Press",
  paragraphs: [
    "Finite Element Analysis",
    "Engineering Drawings",
    "3D Modeling (CAD)",
  ],
  image: benchpress,
  alt: "An olympic bench press engineering drawing",
  to: "Bench Press",
}

const roboticsSandboxData = {
  title: "Robotics Simulation Sandbox",
  paragraphs: [],
  image: dubins_car,
  alt: "An image of dubins car.",
  to: "roboticsSandbox",
}

const wordGameHelperData = {
  title: "Word Game Helper",
  paragraphs: [],
  image: word_game_helper,
  alt: "The UI for my word game helper app",
  to: "wordGameHelper",
}

const infiniteRunnerGameData = {
  title: "Infinite Runner 3D Game",
  paragraphs: [],
  image: infinite_runner,
  alt: "A 3D Infinite running game with a theme inspired by a song of ice and fire",
  to: "infiniteRunner",
}

const qrCodeGeneratorData = {
  title: "QR Code Generator",
  paragraphs: ["Deployed to CloudFlare"],
  image: qrcode_generator,
  alt: "A QR Code Generator Application Deployed to CloudFlare",
  to: "qrcodegenerator",
}

const data = [
  thesisData,
  roboticsSandboxData,
  wordGameHelperData,
  sarrData,
  qrCodeGeneratorData,
  roboticsData,
  infiniteRunnerGameData,
  pendulumData,
  craneData,
  benchpressData,
]

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
      <Welcome>Click on any of the project summaries to learn more!</Welcome>
      {output}
    </CardGrid>
  )
}

export { ProjectGrid, data }

const ProjectGridFilled = () => <ProjectGrid inputs={data}></ProjectGrid>
export default ProjectGridFilled
