import React from "react"
import styled from "styled-components"

import upArrowImage from "../Images_and_Videos/ArrowImages/arrow.png"

const StyledButtonContainer = styled.button`
  position: fixed;
  right: 3%;
  bottom: 3%;
  z-index: 11;
  display: flex;
  justify-content: flex-end;

  background: none;
  border: none;
  cursor: pointer;
  max-width: 50px;
  max-height: 50px;

  width: 8%;
`

const Arrow = ({ onClick }) => {
  return (
    <StyledButtonContainer onClick={onClick}>
      <img
        src={upArrowImage}
        alt="An up Arrow for navigation"
        width="100%"
      ></img>
    </StyledButtonContainer>
  )
}

export default Arrow
