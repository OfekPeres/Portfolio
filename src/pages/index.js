import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import OfekParticles from "../components/Particles"
import {
  SpaceShip,
  Nudge,
  Astronaut,
  Earth,
  CoverPageTitle,
} from "../components/coverpage"
import "../styles/main.css"

import HomePageIntro from "../articles/homepage_intro"

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Intro = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  grid-gap: 10px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 3fr 3fr 1fr;
  }
`

const Page = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ofek's Website - Home</title>
      </Helmet>

      <Main>
        <CoverPageTitle className="loading">Launching...</CoverPageTitle>
        <Nudge>Learn More Below!</Nudge>

        <OfekParticles simple={false}></OfekParticles>
        <SpaceShip></SpaceShip>
        <Astronaut></Astronaut>
        <Earth></Earth>
      </Main>
      <Intro>
        <OfekParticles simple></OfekParticles>
        <HomePageIntro></HomePageIntro>
      </Intro>
    </div>
  )
}

export default Page
