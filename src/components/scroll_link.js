import styled from "styled-components"
import { Link } from "react-scroll"
import React from "react"

const StyledScrollLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Scroller = ({ to, children }) => {
  return (
    <StyledScrollLink
      activeClass="element-active-on-screen"
      to={to}
      spy={true}
      //   smooth={true}
      smooth="easeInQuad"
      duration={500}
    >
      {children}
    </StyledScrollLink>
  )
}

export default Scroller
