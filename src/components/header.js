import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HamburgerButton from "../components/button"
import background_image from "../Images_and_Videos/Backgrounds/space-background.png"

import { Arrow } from "react-burgers"

const StyledGatsbyLink = styled(Link)`
  color: #fcf7ff;
  /* text-align: center; */
  font-family: "Alegreya", serif;

  font-size: calc(2vw + 10px);
  text-decoration: none;
`

const HeaderItemContainer = styled.div`
  align-self: center;
  justify-content: center;
  /* padding: 0 5%; */
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
  font-family: "Alegreya", serif;
  font-size: calc(2vw + 15px);
  padding: 20px 0px;
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
      <HeaderItemContainer>
        <Arrow
          color="white"
          borderRadius={10}
          onClick={toggleMenu}
          active={menuOpen}
        />
      </HeaderItemContainer>
    </HeaderContainer>
  )
}

export default HeaderBar
