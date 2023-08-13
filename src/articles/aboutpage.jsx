import React from "react"
import styled from "styled-components"

import GitHubLogo from "../Images_and_Videos/About/GitHubLogo.png"
import LinkedInLogo from "../Images_and_Videos/About/LI-Logo.png"
import "../styles/fadein.css"

import "animate.css/animate.min.css"
// import ScrollAnimation from "react-animate-on-scroll"

const Body = styled.body`
  display: grid;
  grid-template-columns: 1fr minmax(250px, 2fr) 1fr;
  margin: 1rem;
`
const PageTitle = styled.h1`
  font-family: "Abril FatFace", serif;
  box-shadow: black 1px;
  grid-column: 2;
  text-align: center;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
  padding-bottom: calc(26px + 10%);
  padding-top: calc(26px + 10%);
  justify-content: center;
`

const SubTitle = styled.h2`
  font-family: "Abril FatFace", serif;
  grid-column: 2;
  text-align: left;
  font-size: 32;
  padding-bottom: 2%;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
`
const Paragraph = styled.p`
  font-family: "Raleway", serif;
  font-weight: normal;
  font-size: 22;
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
  padding-bottom: 5%;
`

const SectionBreak = styled.div`
  grid-column: 2;

  height: 1px;
  border: 1px black solid;
  border-color: ${({ color }) => (color !== null ? color : "black")};
  width: 20%;
  min-width: 100px;
  max-width: 200px;
  margin: 35px 0;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
  display: flex;
  justify-items: center;
`

const StyledURL = styled.a`
  text-decoration: none;
  grid-column: 2;
  :hover {
    color: skyblue;
  }
  height: 100%;

  color: inherit;
  display: flex;
  justify-items: ${({ align }) => (align !== null ? align : "flex-start")};
  position: relative;
  top: -15px;
`
const ImageStyle = styled.div`
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "-1")};
  justify-self: ${({ align }) => (align !== null ? align : "start")};

  image-orientation: from-image;
  padding: 1em 0;
  display: flex;
  justify-content: left;
`
const Image = ({ image, alt, width, align, rowStart, height }) => {
  if (width == null) {
    width = "100%"
  }
  if (height == null) {
    height = "100%"
  }
  return (
    <ImageStyle align={align} rowStart={rowStart}>
      <img src={image} alt={alt} width={width} height={height}></img>
    </ImageStyle>
  )
}
const LinkContainer = styled.div`
  height: 100%;
  width: 100%;
  /* max-width: 300px; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "-1")};
`
const LinkedLogo = ({ logo, to, alt, align, width, rowStart, height }) => {
  return (
    <LinkContainer rowStart={rowStart}>
      <StyledURL target="_blank" href={to} rowStart={rowStart}>
        <Image
          image={logo}
          alt={alt}
          align={align}
          width={width}
          // height={height}
        ></Image>
      </StyledURL>
    </LinkContainer>
  )
}

// const FadeInContainer = styled.div`
//   grid-column: 2;
//   justify-self: ${({ align }) => (align !== null ? align : "flex-start")};
//   display: grid;
//   justify-content: left;
//   align-items: left;
// `
// TODO: Add fade in Scrolling
const FadeInContainer = styled.div`
  grid-column: 2;
  justify-self: ${({ align }) => (align !== null ? align : "flex-start")};
  display: grid;
  justify-content: left;
  align-items: left;
`

const FadeInSection = ({ align, children }) => {
  return (
    <FadeInContainer align={align} animateIn="fadeIn">
      {children}
    </FadeInContainer>
  )
}

const aboutData = [
  { type: "PageTitle", text: "About Me", align: "center" },
  { type: "SubTitle", text: "Academics" },
  {
    type: "Paragraph",
    text: "I graduated from Princeton University, Class of 2020, earning a degree in Mechanical and Aerospace Engineering and minors in Computer Science and Robotics and Intelligent Systems. I also earned the first place award for best senior thesis and was invited to join the Sigma Xi Honor Society.",
  },
  {
    type: "Paragraph",
    text: "After joining the 'real world' for a year, working as a software engineer at Lockheed Martin, I went back to Princeton to earn a Master of Engineering in Robotics. While earning the degree, I continued to work as a software engineer in a part time capacity. In May of 2022, I successfully graduated with the Masters degree and earned a 3.7 GPA",
  },
  {
    type: "Paragraph",
    text: "My favorite projects are ones where I can combine my software and hardware skills. As a result, some of my favorite classes and projects have been related to the field of Robotics. A few examples include my senior thesis, Everfly, where I worked in a small team of 4 to successfully build an autonomous battery swapping mechanism for the DJI Tello Edu (a small quadcopter), my Junior year design course where I built and programmed a Search and Rescue Robot to autonomously traverse through an obstacle course, and my senior year robotics course where I designed and tested an algorithm on the CrazyFlie drone to  traverse through a 3 dimensional, randomized obstacle course of hanging pipes.",
  },
  { type: "SectionBreak" },
  { type: "SubTitle", text: "Employment Opportunities" },
  {
    type: "Paragraph",
    text: "I love hearing about what's new in tech - connect with me on LinkedIn to chat!",
  },
  {
    type: "Paragraph",
    text: "You can go to my LinkedIn by following the logo below.",
  },
  {
    type: "LinkedLogo",
    logo: LinkedInLogo,
    to: "https://www.linkedin.com/in/ofekperes/",
    alt: "LinkedIn logo",
    align: "center",
    width: "40%",
    height: "100%",
  },
  { type: "SectionBreak" },
  { type: "SubTitle", text: "Hobbies" },
  {
    type: "Paragraph",
    text: "I’m really good at reading – trust me, ask my Mom.",
  },
  {
    type: "Paragraph",
    text: "But actually, I am an avid reader – I love science fiction and fantasy books. Most of the time spent on my phone is reading on the Kindle app.",
  },
  {
    type: "Paragraph",
    text: "I also love spike-ball and ultimate frisbee, hanging out with friends, cooking, and the beach.",
  },
  { type: "SectionBreak" },
  { type: "SubTitle", text: "About My Website" },
  {
    type: "Paragraph",
    text: "I designed my website together with my sister, Adi, using Adobe XD and Procreate.",
  },
  {
    type: "Paragraph",
    text: "I brought it to life using React, Gatsby, and GitHub Pages. ",
  },
  { type: "Paragraph", text: "You can checkout the code at: " },
  {
    type: "LinkedLogo",
    logo: GitHubLogo,
    alt: "GitHub Logo",
    width: "50%",
    // height: "100%",
    to: "https://github.com/OfekPeres",
    align: "left",
  },
  {
    type: "Paragraph",
    text: "One of the main reasons I wanted to build my own website was so that I could display some of my projects in a more organic way, showcasing my talents in a different light than my resume.",
  },
  { type: "SectionBreak" },
  { type: "Title", text: "Thank you for visiting!!" },
]

const About = ({ pageInputs }) => {
  const entries = pageInputs.map((entry, index) => {
    if (entry.type === "PageTitle") {
      return (
        <FadeInSection align={entry.align}>
          <PageTitle rowStart={index + 1}>{entry.text}</PageTitle>
        </FadeInSection>
      )
    }

    if (entry.type === "SubTitle") {
      return (
        <FadeInSection>
          <SubTitle rowStart={index + 1}>{entry.text}</SubTitle>
        </FadeInSection>
      )
    }

    if (entry.type === "Paragraph") {
      return (
        <FadeInSection>
          <Paragraph rowStart={index + 1}>{entry.text}</Paragraph>
        </FadeInSection>
      )
    }

    if (entry.type === "SectionBreak") {
      return (
        <FadeInSection align="center">
          <SectionBreak rowStart={index + 1}></SectionBreak>
        </FadeInSection>
      )
    }

    if (entry.type === "LinkedLogo") {
      return (
        <FadeInSection align={"flex-start"}>
          <LinkedLogo
            rowStart={index + 1}
            logo={entry.logo}
            alt={entry.alt}
            to={entry.to}
            align={entry.align}
            width={entry.width}
            height={entry.height}
          ></LinkedLogo>
        </FadeInSection>
      )
    }
    return <></>
  })

  return <Body>{entries}</Body>
}

const AboutPage = () => {
  return <About pageInputs={aboutData}></About>
}
export default AboutPage
