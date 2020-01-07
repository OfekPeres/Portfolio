import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { animateScroll as scroll, scrollSpy, Events } from "react-scroll"

import GlobalLayout from "../components/global_layout"

import HeaderBar from "../components/header"
import Footer from "../components/footer"
import SideBar from "../components/sidebar"

import UpArrow from "../components/upArrow"
import Logo from "../components/logo"

const Main = styled.main``
const currentPage = { name: "404", link: "/404" }
const initialState = { menuOpen: false }

// Define Error Message Component

const ErrorMessageContainer = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
const ErrorMessageStyle = styled.h1`
  grid-column: 2;
  font-family: "Abril FatFace", serif;
  font-size: calc(1vw + 15px);
`

const ErrorMessage = () => {
  return (
    <ErrorMessageContainer>
      <ErrorMessageStyle>
        It seems like you have reached a page that does not exist! please click
        on the menu bar in the top right of the page to navigate to a different
        page!
      </ErrorMessageStyle>
    </ErrorMessageContainer>
  )
}
const Page = () => {
  const [state, setState] = useState(initialState)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const handleStateChange = state => {
    setState({ ...state, menuOpen: state.isOpen })
  }
  const closeMenu = () => {
    setState({ ...state, menuOpen: false })
  }

  const toggleMenu = () => {
    // console.log(state)
    setState({ ...state, menuOpen: !state.menuOpen })
  }

  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      // console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function(to, element) {
      // console.log("end", arguments)
    })

    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  })

  return (
    <GlobalLayout id="outer-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ofek's Website - 404</title>
      </Helmet>
      <SideBar
        isOpen={state.menuOpen}
        handleStateChange={handleStateChange}
        closeMenu={closeMenu}
        state={state}
      ></SideBar>
      <Main id="main-content">
        <HeaderBar
          currentPage={currentPage}
          toggleMenu={toggleMenu}
          menuOpen={state.menuOpen}
        ></HeaderBar>

        <UpArrow onClick={scrollToTop}></UpArrow>
        <ErrorMessage></ErrorMessage>
        <Logo></Logo>
        <Footer></Footer>
      </Main>
    </GlobalLayout>
  )
}

export default Page
