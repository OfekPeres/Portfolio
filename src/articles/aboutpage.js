import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import GitHubLogo from "../Images_and_Videos/About/GitHubLogo.png"
import LinkedInLogo from "../Images_and_Videos/About/LI-Logo.png"
import "../styles/fadein.css"

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
  padding-bottom: 5%;
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

  color: inherit;
  display: flex;
  justify-items: ${({ align }) => (align !== null ? align : "center")};
  position: relative;
  top: -15px;
`
const ImageStyle = styled.div`
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "-1")};
  justify-self: ${({ align }) => (align !== null ? align : "start")};
  /* align-self: ${({ align }) => (align !== null ? align : "start")}; */
  /* display:flex; */
  /* justify-self:center; */
  image-orientation: from-image;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  
`
const Image = ({ image, alt, width, align, rowStart }) => {
  if (width == null) {
    width = "100%"
  }
  return (
    <ImageStyle align={align} rowStart={rowStart}>
      <img src={image} alt={alt} width={width}></img>
    </ImageStyle>
  )
}
const LinkedLogo = ({ logo, to, alt, align, width, rowStart }) => {
  return (
    <StyledURL target="_blank" href={to} rowStart={rowStart}>
      <Image image={logo} alt={alt} align={align} width={width}></Image>
    </StyledURL>
  )
}

const FadeInContainer = styled.div`
  grid-column: 2;
  justify-self: ${({ align }) => (align !== null ? align : "start")};
`

const FadeInSection = props => {
  const [isVisible, setVisible] = React.useState(true)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    const curDomRef = domRef.current
    observer.observe(domRef.current)
    return () => observer.unobserve(curDomRef)
  }, [])
  return (
    <FadeInContainer
      align={props.align}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </FadeInContainer>
  )
}

const aboutData = [
  { type: "PageTitle", text: "About Me" },
  { type: "SubTitle", text: "Academics" },
  {
    type: "Paragraph",
    text:
      "I am currently a senior at Princeton University earning a degree in Mechanical and Aerospace Engineering.",
  },
  {
    type: "Paragraph",
    text:
      "I took my first ever computer science class in the spring of my first year and loved it, so I am also earning a minor in computer science.",
  },
  {
    type: "Paragraph",
    text:
      "My favorite projects are ones where I can combine my software and hardware skills, as a result some of my favorite classes have been related to the field of Robotics. My other minor is Robotics and Intelligent Systems.",
  },
  { type: "SectionBreak" },
  { type: "SubTitle", text: "Employment Opportunities" },
  {
    type: "Paragraph",
    text:
      "I am currently actively recruiting for full time opportunities in Robotics, Software Engineering, and Mechanical/Aerospace Engineering. ",
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
    width: "50%",
  },
  { type: "SectionBreak" },
  { type: "SubTitle", text: "Hobbies" },
  {
    type: "Paragraph",
    text: "I’m really good at reading – trust me, ask my Mom.",
  },
  {
    type: "Paragraph",
    text:
      "But actually, I am an avid reader – I love science fiction and fantasy books. Most of the time spent on my phone is reading on the Kindle app.",
  },
  {
    type: "Paragraph",
    text:
      "I also love spike-ball and ultimate frisbee. In New York this past summer I went to Central Park after work to join pick-up games  (or read) almost every day!",
  },
  { type: "SectionBreak" },
  { type: "SubTitle", text: "About My Website" },
  {
    type: "Paragraph",
    text:
      "I designed my website together with my sister, Adi, using Adobe XD and Procreate.",
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
    width: "75px",
    to: "https://github.com/OfekPeres",
    align: "left",
  },
  {
    type: "Paragraph",
    text:
      "One of the main reasons I wanted to build my own website was so that I could display some of my projects in a more organic way, showcasing my talents in a different light than my resume.",
  },
  { type: "SectionBreak" },
  { type: "Title", text: "Thank you for visiting!!" },
]

const About = ({ pageInputs }) => {
  const entries = pageInputs.map((entry, index) => {
    if (entry.type === "PageTitle") {
      return (
        <FadeInSection>
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
        <FadeInSection>
          <LinkedLogo
            rowStart={index + 1}
            logo={entry.logo}
            alt={entry.alt}
            to={entry.to}
            align={entry.align}
            width={entry.width}
          ></LinkedLogo>
        </FadeInSection>
      )
    }
    return <></>
  })

  return <Body>{entries}</Body>
}

export default () => {
  return <About pageInputs={aboutData}></About>
}
