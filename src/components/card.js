import React from "react"
import styled from "styled-components"
import ScrollLink from "../components/scroll_link"
// const picturewidth = "278px"
const picturewidth = "80%"

const CardTitle = styled.h1`
  background-color: ${({ backgroundColor }) =>
    backgroundColor !== null ? backgroundColor : "none"};
  font-family: "Cinzel", serif;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  width: ${picturewidth};
  padding-top: 5px;
`
const CardParagraphStyle = styled.p`
  background-color: ${({ backgroundColor }) =>
    backgroundColor !== null ? backgroundColor : "none"};

  font-family: "Alegreya", serif;
  font-weight: regular;
  font-size: 14px;
  text-align: center;
  width: ${picturewidth};
`
const CardParagraph = ({ paragraphs, backgroundColor }) => {
  const styled_paragraphs = paragraphs.map(paragraph => {
    return (
      <CardParagraphStyle backgroundColor={backgroundColor}>
        {paragraph}
      </CardParagraphStyle>
    )
  })
  return styled_paragraphs
}
const CardStyle = styled.article`
  margin: 1rem 0;
  padding-bottom: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;

  img {
    order: -1;
  }
  @supports (display: grid) {
    margin: 0;
    padding-bottom: 0;
  }
`
const CardGrid = styled.div`
  /* Fall back for no grid support */
  max-width: 500px;
  margin: 0 auto;
  padding: 5rem 4rem;

  /* Grid styling */
  @supports (display: grid) {
    max-width: 10000px;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.75fr));
    grid-gap: 4rem;

    justify-content: center;
    justify-self: center;
    padding-bottom: 100px;
  }
`

const Card = ({ title, paragraphs, image, alt, backgroundColor, to }) => {
  return (
    <CardStyle>
      <ScrollLink to={to}>
        <CardTitle backgroundColor={backgroundColor}>{title}</CardTitle>
        <CardParagraph
          paragraphs={paragraphs}
          backgroundColor={backgroundColor}
        ></CardParagraph>

        <img src={image} alt={alt} width={picturewidth}></img>
      </ScrollLink>
    </CardStyle>
  )
}

export { Card, CardGrid }
