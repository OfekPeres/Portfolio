import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { Element, scroller } from "react-scroll"

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  max-height: 100vh;
  height: 100vh;
`

const Intro = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr minmax(200px, 2fr) 1fr;
  text-align: center;
  grid-gap: 10px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 3fr 3fr 1fr;
  }
  min-height: 100vh;
  /* max-height: 100vh; */
`

const Page = () => {
  const scrollToElement = () => {
    scroller.scrollTo("ID1", {
      duration: 500,
      smooth: true,
    })
  }

  setTimeout(scrollToElement, 9000)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ofek's Website - Home</title>
      </Helmet>
      <Main>
        <CoverPageTitle className="loading">Launching...</CoverPageTitle>
        <Nudge>Learn More Below!</Nudge>

        <OfekParticles></OfekParticles>
        <SpaceShip></SpaceShip>
        <Astronaut></Astronaut>
        <Earth></Earth>
      </Main>
      <Element name="ID1">
        <Intro>
          <OfekParticles simple></OfekParticles>
          <HomePageIntro></HomePageIntro>
        </Intro>
      </Element>
    </div>
  )
}

export default Page
