import React from "react"
import { bubble as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;

  color: #fcf7ff;
  border: white 0px solid;
  padding: 1.5em;
  :hover {
    color: skyblue;
  }
`

const SideBar = ({ isOpen, handleStateChange, closeMenu }) => {
  return (
    <Menu
      isOpen={isOpen}
      customBurgerIcon={false}
      customCrossIcon={false}
      onStateChange={(state) => handleStateChange(state)}
      pageWrapId={"main-content"}
      outerContainerId={"outer-container"}
      disableAutoFocus
    >
      <StyledLink to="/" onClick={closeMenu}>
        Home
      </StyledLink>

      <StyledLink to="/Projects" onClick={closeMenu}>
        Projects
      </StyledLink>

      <StyledLink to="/WorkExperience" onClick={closeMenu}>
        Work Experience
      </StyledLink>

      <StyledLink to="/About" onClick={closeMenu}>
        About
      </StyledLink>
    </Menu>
  )
}

export default SideBar
