import React from "react"

import styled from "styled-components"

import "../styles/main.css"

import AstronautImage from "../Images_and_Videos/CoverPage/astronaut.png"
import EarthImage from "../Images_and_Videos/CoverPage/earth.png"
import SpaceShipImage from "../Images_and_Videos/CoverPage/spaceship.png"
const SpaceshipContainer = styled.div`
  display: flex;
  /* width: 100%; */
  height: 100%;
  grid-column: 2;
  grid-row-start: 2;
  grid-row-end: 5;
  max-height: 100vh;
  /* min-width: 300px; */
  background: transparent;
  transform: translateY(-38px) rotate(45deg);

  @media screen and (max-width: 1050px) {
    grid-column: 2 / 4;
    transform: none;
    height: 80%;
  }
  @media screen and (max-width: 500px) {
    grid-column: 1 / 4;
    padding-left: 10%;
    padding-top: 10%;
  }
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
  /* justify-self: start; */
`
const AstronautContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  grid-column: 1 / 2;
  grid-row-start: 1;
  grid-row-end: 5;
  /* min-width: 300px; */

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (max-width: 1050px) {
    grid-column: 1 / 3;
  }
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
  z-index: 10;
`
const EarthContainer = styled.div`
  display: flex;
  /* width: 100%; */
  height: 100vh;
  grid-column: 3 / 5;
  grid-row-start: 1;
  grid-row-end: 5;
  /* min-width: 300px; */
  /* max-width: 100%; */
  /* overflow: none; */
  justify-self: end;
  @media screen and (max-width: 1050px) {
    display: none;
  }
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
`
const Nudge = styled.div`
  font-family: "Abril FatFace";
  font-size: calc(2vw + 20px);
  text-align: center;
  color: #fbf5b1;
  margin-top: 20px;
  width: 100%;
  grid-row: 1;
  grid-column: 1/4;
  animation: "nudge" 3000ms ease-in;
  opacity: 0;
  animation-delay: 6200ms;
  animation-duration: 3000ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes nudge {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  z-index: 11;
`

const CoverPageTitle = styled.h1`
  font-family: "Abril FatFace";
  font-size: 40px;
  text-align: center;
  color: #f08080;

  grid-row: 1;
  grid-column: 2/3;

  animation: "launching";
  animation-direction: alternate;
  animation-delay: 100ms;
  animation-duration: 2000ms;
  animation-iteration-count: 3;
  opacity: 0;
  @keyframes launching {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  z-index: 11;
`

const ImageHolder = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const SpaceShip = () => {
  return (
    <SpaceshipContainer>
      <ImageHolder>
        <img
          src={SpaceShipImage}
          alt="Spaceship outline!"
          height="100%"
          // width="100%"
        ></img>
      </ImageHolder>
    </SpaceshipContainer>
  )
}

const Astronaut = () => {
  return (
    <AstronautContainer>
      <ImageHolder>
        <img
          src={AstronautImage}
          alt="An Astronaut outline!"
          height=" 100%"
          // width="100%"
        ></img>
      </ImageHolder>
    </AstronautContainer>
  )
}

const Earth = () => {
  return (
    <EarthContainer>
      <ImageHolder>
        <img
          src={EarthImage}
          alt="An Earth outline!"
          height="100%"
          // width="100%"
        ></img>
      </ImageHolder>
    </EarthContainer>
  )
}

export { SpaceShip, Astronaut, Earth, Nudge, CoverPageTitle }
