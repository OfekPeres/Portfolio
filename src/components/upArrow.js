import React from "react"
import styled from "styled-components"

const StyledButtonContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 50px;
  z-index: 11;
`

const UpArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 15px solid black;

  /* position: absolute; */
  /* right: 10px;
  bottom: 40px; */
`
const Rectangle = styled.span`
  position: absolute;

  border-left: 3px solid;
  border-right: 3px solid;
  border-top: 15px solid;
  border-bottom: 15px solid;
  right: 22px;
  bottom: 12px;
`
const Arrow = ({ onClick }) => {
  return (
    <StyledButtonContainer onClick={onClick}>
      <UpArrow></UpArrow>
      {/* <Rectangle></Rectangle> */}
    </StyledButtonContainer>
  )
}

export default Arrow
