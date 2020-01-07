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
  color: ${({ color }) => (color !== null ? color : "inherit")};
  margin-top: 89px;
  height: 34px;
  z-index: 10;
`

const SectionBlurb = styled.h2`
  grid-column: 2;
  padding-top: 60px;
  /* padding-bottom: 30px; */
  text-align: center;
  font-family: "Raleway", serif;
  font-weight: normal;
  font-size: 19px;
  min-width: 300px;

  justify-self: center;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 22px;
  }
`

const SectionTitle = styled.h3`
  grid-column: 1/4;
  grid-row-start: ${({ rowStart }) => rowStart};
  text-align: center;
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 19px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 0.8em;
  align-self: center;
  min-width: 300px;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 27px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
  font-family: ${({ FatFace }) =>
    FatFace === "FatFace" ? "Abril FatFace, serif" : "Cinzel, serif"};

  padding-bottom: ${({ FatFace }) => (FatFace === "FatFace" ? "0" : ".8em")};
`
const SectionSubTitle = styled.h3`
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
  text-align: left;
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 16px;
  /* width: 100%; */
  padding-bottom: 5px;
  padding-top: 20px;
  align-self: center;
  min-width: 278px;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 24px;
  }
`

const SectionEntry = styled.p`
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
  /* font-family: "Alegreya", serif; */
  font-family: "Raleway", serif;
  font-weight: lighter;
  font-size: 14px;
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  padding-bottom: 15px;
  min-width: 278px;

  align-self: flex-start;
  @media screen and (min-width: ${DesktopWidth}) {
    font-size: 16px;
  }
`

const SectionBreak = styled.div`
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "auto")};
  height:1px;
  border: 1.0px black solid;
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
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "-1")};
  justify-self: ${({ align }) => (align !== null ? align : "start")};
  /* align-self: ${({ align }) => (align !== null ? align : "start")}; */
  /* display:flex; */
  /* justify-self:center; */
  /* image-orientation: from-image; */
  padding: 1em 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height:100%;
  /* width:100%; */
  align-items:flex-start;

  transform: ${({ right }) => (right ? "rotate(90deg)" : "none")};

  
`
const BeforeCraneCaption = styled.h4`
  /* grid-column: 2;
  grid-row: 9; */
  padding-left: 5vw;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: "Abril Fatface", serif;
  font-size: calc(5px + 5vw);
  justify-self: flex-start;
  align-self: center;
`
const AfterCraneCaption = styled.h4`
  grid-column: 2;
  grid-row: 9;
  /* padding-right: 5vw; */
  /* writing-mode: sideways-lr;
  text-orientation: mixed; */
  font-family: "Abril Fatface", serif;
  font-size: calc(5px + 6vw);
  justify-self: flex-end;
  align-self: center;
  transform: rotate(-90deg);
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
        <ImageStyle right>
          <img src={image} alt={alt} width="95%"></img>
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

// To make a dynamic sizing video player I need 3 things,
// This initial container so that the video is not huge
const VideoContainer = styled.div`
  grid-column: 2;
  grid-row: ${({ rowStart }) => (rowStart !== null ? rowStart : "-1")};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 1.5em;
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
  padding-top: 1em;
  padding-bottom: 0.5em;
`

const Video = ({ video, poster, rowStart, loop }) => {
  return (
    <VideoContainer rowStart={rowStart}>
      <VideoAspectRatioContainer>
        <VideoItem>
          <video
            src={video}
            poster={poster}
            width="100%"
            height="100%"
            controls
            type="video/mp4"
            playsinline
            // muted
            // playsInline
            loop={loop}
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
    grid-template-columns: 1fr minmax(300px, 1.3fr) 1fr;

    justify-content: center;
  }
`
const VariableGridContainer = styled.div`
  grid-row-start: ${({ top }) => top};
  grid-row-end: ${({ bot }) => bot};
  grid-column-start: ${({ left }) => left};
  grid-column-end: ${({ right }) => right};

  justify-self: center;
`
const Article = ({ metadata, SectionHeaderData, ArticleBodyData }) => {
  const entries =
    ArticleBodyData.Entries !== null
      ? ArticleBodyData.Entries.map((entry, index) => {
          if (entry.type === "VariableGridContainer") {
            return (
              <VariableGridContainer
                left={entry.left}
                right={entry.right}
                top={entry.top}
                bot={entry.bot}
                className="gears"
              >
                <Image image={entry.image} alt={entry.alt}></Image>
              </VariableGridContainer>
            )
          }
          if (entry.type === "SectionEntry") {
            if (entry.link) {
              const StyledURL = styled.a`
                text-decoration: none;

                :hover {
                  color: skyblue;
                }

                color: inherit;
              `
              return (
                <SectionEntry
                  id={entry.id}
                  rowStart={index + 2}
                  centered={entry.centered}
                >
                  <StyledURL target="_blank" href={entry.to}>
                    {entry.text}
                  </StyledURL>
                </SectionEntry>
              )
            }
            return (
              <SectionEntry
                id={entry.id}
                rowStart={index + 2}
                centered={entry.centered}
              >
                {entry.text}
              </SectionEntry>
            )
          }
          if (entry.type === "SectionSubTitle") {
            return (
              <SectionSubTitle id={entry.id} rowStart={index + 2}>
                {entry.text}
              </SectionSubTitle>
            )
          }
          if (entry.type === "SectionTitle") {
            if (entry.type2 && entry.type2 === "links") {
              const LinkContainer = styled.div`
                padding-bottom: 30px;
                :hover {
                  text-decoration: underline;
                }
              `
              const output = entry.links.map(link => {
                return (
                  <LinkContainer>
                    <ScrollLink to={link.to}>{link.text}</ScrollLink>
                  </LinkContainer>
                )
              })

              const RowOfDivs = styled.div`
                display: inline-flex;
                text-align: center;
              `
              return (
                <SectionTitle
                  id={entry.id}
                  className={entry.className}
                  rowStart={index + 2}
                >
                  <RowOfDivs>{output}</RowOfDivs>
                </SectionTitle>
              )
            }
            return (
              <SectionTitle
                id={entry.id}
                FatFace={entry.className}
                rowStart={index + 2}
              >
                {entry.text}
              </SectionTitle>
            )
          }
          if (entry.type === "SectionBreak") {
            return (
              <SectionBreak
                rowStart={index + 2}
                color={entry.color}
              ></SectionBreak>
            )
          }
          if (entry.type === "Image") {
            if (entry.link) {
              const StyledURL = styled.a`
                text-decoration: none;
                grid-column: 2;
                :hover {
                  color: skyblue;
                }

                color: inherit;
              `
              return (
                <StyledURL target="_blank" href={entry.to} rowStart={index + 2}>
                  <Image
                    image={entry.image}
                    alt={entry.alt}
                    width={entry.width}
                    align={entry.align}
                    rowStart={index + 2}
                  ></Image>
                </StyledURL>
              )
            }
            return (
              <Image
                image={entry.image}
                alt={entry.alt}
                width={entry.width}
                align={entry.align}
                rowStart={index + 2}
              ></Image>
            )
          }
          if (entry.type === "Video") {
            return (
              <Video
                rowStart={index + 2}
                video={entry.video}
                poster={entry.poster}
                loop={entry.loop}
              ></Video>
            )
          }
          if (entry.type === "VideoCaption") {
            return (
              <VideoCaption rowStart={index + 2}>{entry.text}</VideoCaption>
            )
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
        color={SectionHeaderData.color}
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
