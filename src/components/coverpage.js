import React from "react"

import styled from "styled-components"

import "../styles/main.css"

import AstronautImage from "../Images_and_Videos/CoverPage/astronaut.png"
import EarthImage from "../Images_and_Videos/CoverPage/earth.png"
import SpaceShipImage from "../Images_and_Videos/CoverPage/spaceship.png"
const SpaceshipContainer = styled.div`
  /* display: flex; */

  grid-column: 2;
  grid-row-start: 2;
  grid-row-end: 5;

  height: 100vh;
  max-height: 100vh;

  background: transparent;
  transform: translateX(90px) rotate(45deg);
  /* width: 50%; */

  @media screen and (max-width: 1050px) {
    transform: none;
    height: 80vh;
    grid-row: 2 / 4;
    grid-column: 3;
    /* width: 50%; */
    transform: none;
    transform: translateY(60px) translateX(-60px) rotate(35deg);
    max-width: 270px;
  }
  @media screen and (max-width: 500px) {
    grid-column: 1 / 5;
    grid-row: -3 / -1;
    transform: none;
    transform: translateX(60px) translateY(-40px) rotate(15deg);
    height: 50vh;
    max-width: 200px;
  }
  max-width: 100vw;
  position: relative;
`
const AstronautContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  grid-column: 1 / 2;
  grid-row-start: 1;
  grid-row-end: 5;
  grid-row: 2 / -1;

  position: relative;
  @media screen and (max-width: 1050px) {
    height: 100vh;
    grid-row: 1 / -1;
  }
  @media screen and (max-width: 500px) {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    transform: translateY(90px);
    height: 47vh;
  }
  z-index: 12;
`
const EarthContainer = styled.div`
  display: flex;

  height: 100vh;
  grid-column: 3 / 5;
  grid-row: 4;

  justify-self: end;
  @media screen and (max-width: 1050px) {
    height: 50vh;
    grid-row: 4;
    grid-column: 4;
  }
  @media screen and (max-width: 500px) {
    grid-column: 4;
    grid-row: -2 / -1;
    /* transform: translateY(-70px); */

    height: 40vh;
  }
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  z-index: 13;
`
const Nudge = styled.div`
  font-family: "Abril FatFace";
  font-size: calc(2vw + 20px);
  text-align: center;
  color: #fbf5b1;
  margin-top: 20px;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / -1;
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
  position: relative;
  grid-row: 1;
  grid-column: 1 / -1;

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

  @media screen and (max-width: 500px) {
    grid-column: 1 / -1;
    grid-row: 1;
  }
`

const ImageHolder = styled.div`
  width: auto;
  height: 100%;
  max-height: 90vh;
  object-fit: cover;

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
