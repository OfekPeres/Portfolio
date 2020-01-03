import React from "react"
import styled from "styled-components"
import ScrollLink from "../components/scroll_link"
const DesktopWidth = "800px"

const ArticleStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) =>
    backgroundColor !== null ? backgroundColor : "black"};

  color: ${({ color }) => (color !== null ? color : "black")};

  left: 0;
  right: 0;
  padding-bottom: 20px;

  min-width: 0;
`

const SectionHeader = styled.h1`
  text-align: center;
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 19px;
  top: -12px;
  position: relative;
  @media screen and (min-width: ${DesktopWidth}) {
    /* font-size: calc(16px + 6 * ((100vw - 320px) / 680)); */
    font-size: 36px;
    top: -28px;
  }
`

const SectionHeaderBackground = styled.div`
  background: ${({ backgroundColor }) =>
    backgroundColor !== null ? backgroundColor : "white"};
  margin-top: 89px;
  height: 34px;
  z-index: 10;
`

const SectionBlurb = styled.h2`
  grid-column: 2;
  padding-top: 60px;
  /* padding-bottom: 30px; */
  text-align: center;
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 19px;
  min-width: 300px;

  justify-self: center;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 36px;
  }
`

const SectionTitle = styled.h3`
  grid-column: 1/4;

  text-align: center;
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 19px;
  width: 100%;
  padding: 25px 0;
  align-self: center;
  min-width: 300px;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 36px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`
const SectionSubTitle = styled.h3`
  grid-column: 2;
  text-align: left;
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 18px;
  /* width: 100%; */
  padding-bottom: 5px;
  padding-top: 5px;
  align-self: center;
  min-width: 278px;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 36px;
  }
`

const SectionEntry = styled.p`
  grid-column: 2;
  font-family: "Alegreya", serif;
  font-weight: lighter;
  font-size: 14px;

  padding-bottom: 15px;
  min-width: 278px;
  text-align: left;
  align-self: flex-start;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 22px;
  }
`

const SectionBreak = styled.div`
  grid-column: 2;
  
  border: 1.5px black solid;
  /* border-width: 1.5px;
  border-color: ${color => (color !== null ? color : "black")};
  border-style: solid; */
  border-color: ${({ color }) => (color !== null ? color : "black")};
  width: 20%;
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-self: center;
  margin: 35px 0;
`

const ImageStyle = styled.div`
  grid-column: 2;
  image-orientation: from-image;
`
const BeforeCraneCaption = styled.h4`
  /* grid-column: 2;
  grid-row: 9; */
  padding-left: 5vw;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: "Abril Fatface", serif;
  font-size: 7vw;
  justify-self: flex-start;
  align-self: center;
`
const AfterCraneCaption = styled.h4`
  grid-column: 2;
  grid-row: 9;
  padding-right: 5vw;
  writing-mode: sideways-lr;
  text-orientation: mixed;
  font-family: "Abril Fatface", serif;
  font-size: 9vw;
  justify-self: flex-end;
  align-self: center;
`
const CraneCaptionStyle = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const CraneImageCaption = ({ image, alt, caption, side }) => {
  if (side === "left") {
    return (
      <CraneCaptionStyle>
        <AfterCraneCaption>{caption}</AfterCraneCaption>
        <ImageStyle>
          <img src={image} alt={alt} width="70%"></img>
        </ImageStyle>
      </CraneCaptionStyle>
    )
  }
  if (side === "right") {
    return (
      <CraneCaptionStyle>
        <ImageStyle>
          <img src={image} alt={alt} width="100%"></img>
        </ImageStyle>
        <BeforeCraneCaption>{caption}</BeforeCraneCaption>
      </CraneCaptionStyle>
    )
  }
  return <></>
}
const Image = ({ image, alt }) => {
  return (
    <ImageStyle>
      <img src={image} alt={alt} width="100%"></img>
    </ImageStyle>
  )
}

// To make a dynamic sizing video player I need 3 things,
// This initial container so that the video is not huge
const VideoContainer = styled.div`
  grid-column: 2;
  width: 100%;
  /* margin-top: 10px; */
  margin-bottom: 10px;
  align-self: center;
  min-width: 278px;
`
// This container to maintain the aspect ratio of most videos, especially youtube ones
const VideoAspectRatioContainer = styled.div`
  /* display: flex; */
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  /* padding-top: 25px; */
  height: 0;
  width: 100%;
`
// the actual video with the video element goes in this
const VideoItem = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 60%; */
`

const VideoCaption = styled.h3`
  font-family: "Abril Fatface", serif;
  font-size: 19px;
  grid-column: 2;
  justify-self: center;
`

const Video = ({ video, poster }) => {
  return (
    <VideoContainer>
      <VideoAspectRatioContainer>
        <VideoItem>
          <video
            src={video}
            poster={poster}
            width="100%"
            height="100%"
            controls
            // muted
            playsInline
            loop="auto"
          ></video>
        </VideoItem>
      </VideoAspectRatioContainer>
    </VideoContainer>
  )
}

const ArticleBody = styled.section`
  display: flex;
  flex-flow: column;
  @supports (display: grid) {
    max-width: 10000px;
    margin: 0;

    display: grid;
    grid-template-columns: 1fr minmax(300px, 2fr) 1fr;

    justify-content: center;
  }
`

const Article = ({ metadata, SectionHeaderData, ArticleBodyData }) => {
  const entries =
    ArticleBodyData.Entries !== null
      ? ArticleBodyData.Entries.map(entry => {
          if (entry.type === "SectionEntry") {
            return <SectionEntry id={entry.id}>{entry.text}</SectionEntry>
          }
          if (entry.type === "SectionSubTitle") {
            return <SectionSubTitle id={entry.id}>{entry.text}</SectionSubTitle>
          }
          if (entry.type === "SectionTitle") {
            if (entry.type2 && entry.type2 === "links") {
              const output = entry.links.map(link => {
                return (
                  <div>
                    <ScrollLink to={link.to}>{link.text}</ScrollLink>
                  </div>
                )
              })

              const RowOfDivs = styled.div`
                display: inline-flex;
                text-align: center;
              `
              return (
                <SectionTitle id={entry.id}>
                  <RowOfDivs>{output}</RowOfDivs>
                </SectionTitle>
              )
            }
            return <SectionTitle id={entry.id}>{entry.text}</SectionTitle>
          }
          if (entry.type === "SectionBreak") {
            return <SectionBreak color={entry.color}></SectionBreak>
          }
          if (entry.type === "Image") {
            return <Image image={entry.image} alt={entry.alt}></Image>
          }
          if (entry.type === "Video") {
            return <Video video={entry.video} poster={entry.poster}></Video>
          }
          if (entry.type === "VideoCaption") {
            return <VideoCaption>{entry.text}</VideoCaption>
          }
          if (entry.type === "CraneCaption") {
            return (
              <CraneImageCaption
                image={entry.image}
                alt={entry.alt}
                caption={entry.text}
                side={entry.side}
              ></CraneImageCaption>
            )
          }
          return <div></div>
        })
      : ""

  return (
    <ArticleStyle
      backgroundColor={metadata.backgroundColor}
      color={metadata.color}
      transparency={metadata.transparency}
      id={metadata.id}
    >
      <SectionHeaderBackground
        backgroundColor={SectionHeaderData.backgroundColor}
      >
        <SectionHeader>{SectionHeaderData.text}</SectionHeader>
      </SectionHeaderBackground>
      <ArticleBody>
        <SectionBlurb>{ArticleBodyData.SectionBlurb.text}</SectionBlurb>
        {entries}
      </ArticleBody>
    </ArticleStyle>
  )
}

export default Article

// export default () => <div>Hello World!</div>
