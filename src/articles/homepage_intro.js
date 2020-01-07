import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Name = styled(Link)`
  margin-top: 5%;
  font-family: "Abril FatFace", serif;
  font-size: calc(5vw + 20px);
  text-decoration: none;
  grid-row: 1;
  grid-column: 2 / 4;
  @media screen and (max-width: 600px) {
    grid-column: 1 / -1;
  }
  color: #fcf7ff;
  cursor: pointer;
  z-index: 10;
  :hover {
    color: skyblue;
  }
`

const BlurbAboutMe = styled.h2`
  font-family: "Cinzel", serif;
  font-size: calc(1.5vw + 15px);
  grid-row: 2;
  grid-column: 2 / 4;
  color: #fcf7ff;
`
const AboutMe = styled.p`
  font-family: "Raleway", serif;
  font-weight: normal;
  grid-row: 3;
  grid-column: 2 / 4;
  font-size: calc(0.55vw + 15px);
  color: #fcf7ff;
  text-align: left;
`

const StyledGatsbyLink = styled(Link)`
  color: #fcf7ff;
  text-align: center;
  font-family: "Cinzel", serif;

  font-size: calc(0.15vw + 15px);
  text-decoration: none;
  grid-row: 4;
  grid-column: ${({ column }) => column};
  cursor: pointer;
  z-index: 10;
  :hover {
    color: skyblue;
  }
  align-self: start;
  justify-self: ${({ left }) => (left ? "start" : "end")};

  width: 85%;
  margin-bottom: 20px;
`

const blurbAboutMeText = "Algorithm & Controls Robotics Developer"
const aboutMeText =
  "Welcome to my website! I am a Senior at Princeton University studying Mechanical and Aerospace Engineering, Robotics, and Computer Science. I am very interested in the intersection between hardware and software!"
const projectsLinkText = "Check out some of my projects here!"
const workExperienceLinkText = "Check out my work experience here!"
const HomePageIntro = () => {
  return (
    <>
      <Name id="HomePageName" to={"/About"}>Ofek Peres</Name>
      <BlurbAboutMe>{blurbAboutMeText}</BlurbAboutMe>
      <AboutMe>{aboutMeText}</AboutMe>
      <StyledGatsbyLink left column={2} to={"/Projects"}>
        {projectsLinkText}
      </StyledGatsbyLink>
      <StyledGatsbyLink column={3} to={"/WorkExperience"}>
        {workExperienceLinkText}
      </StyledGatsbyLink>
    </>
  )
}

export default HomePageIntro
