import React from "react"
import { bubble as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  background-color: white;
`
export default ({ isOpen, handleStateChange, closeMenu }) => {
  return (
    <Menu
      isOpen={isOpen}
      customBurgerIcon={false}
      customCrossIcon={false}
      onStateChange={state => handleStateChange(state)}
      pageWrapId={"main-content"}
      outerContainerId={"outer-container"}
    >
      <StyledLink className="menu-item" to="/" onClick={closeMenu}>
        Home
      </StyledLink>

      <StyledLink className="menu-item" to="/Projects" onClick={closeMenu}>
        Projects
      </StyledLink>

      <StyledLink
        className="menu-item"
        to="/WorkExperience"
        onClick={closeMenu}
      >
        Work Experience
      </StyledLink>

      <StyledLink className="menu-item" to="/About" onClick={closeMenu}>
        About
      </StyledLink>
    </Menu>
  )
}
