import React from "react"
import styled from "styled-components"
import OfekLogo from "../images/OfekLogo.png"

const LogoGridContainer = styled.div`
  display: grid;
`
const LogoContainer = styled.div`
  justify-self: center;
  align-self: center;
  max-width: 400px;
  width: 60%;
`
const Logo = () => {
  return (
    <LogoGridContainer>
      <LogoContainer>
        <img src={OfekLogo} alt="Ofek's Logo" width="100%"></img>
      </LogoContainer>
    </LogoGridContainer>
  )
}

export default Logo
