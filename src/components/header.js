import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import background_image from "../Images_and_Videos/Backgrounds/space-background.png"

import { Arrow } from "react-burgers"

const StyledGatsbyLink = styled(Link)`
  color: #fcf7ff;

  font-family: "Abril FatFace", serif;

  font-size: calc(2vw + 10px);
  text-decoration: none;
  align-self: center;
  justify-content: center;
`

const HeaderItemContainer = styled.div`
  align-self: center;
  justify-content: center;
  /* padding: 0 5%; */
  display: flex;
  height: 100%;
`
const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

  background-image: url(${background_image});
  box-shadow: 0px 3px 3px black;

  /* Text Specifications */
  color: #fcf7ff;
  text-align: center;
  font-family: "Abril FatFace", serif;
  font-size: calc(1vw + 15px);
  padding: 0px 0px;

  .ArrowMenu {
    z-index: 10010;
  }
`

const HeaderBar = ({ currentPage, toggleMenu, menuOpen }) => {
  return (
    <HeaderContainer>
      <HeaderItemContainer>
        <StyledGatsbyLink to="/">Ofek Peres</StyledGatsbyLink>
      </HeaderItemContainer>
      <HeaderItemContainer>
        <StyledGatsbyLink to={currentPage.link}>
          {currentPage.name}
        </StyledGatsbyLink>
      </HeaderItemContainer>
      <HeaderItemContainer className="ArrowMenu">
        <Arrow
          color="white"
          borderRadius={20}
          onClick={toggleMenu}
          active={menuOpen}
          lineHeight={2}
        />
      </HeaderItemContainer>
    </HeaderContainer>
  )
}

export default HeaderBar
