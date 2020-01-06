import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  font-family: "Raleway", serif;
  font-size: 16px;
  text-align: center;
  padding-bottom: 5px;

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      Designed and built by Adi and Ofek Peres | 2020
    </FooterContainer>
  )
}

export default Footer
