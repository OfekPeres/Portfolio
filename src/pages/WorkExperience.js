import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { animateScroll as scroll, scrollSpy, Events } from "react-scroll"

import GlobalLayout from "../components/global_layout"
import "../styles/main.css"
import "../styles/burgermenu.css"
import WorkGrid from "../components/workgrid"
import AmazonArticle from "../articles/amazon"
import FluidsArticle from "../articles/fluids"

import HeaderBar from "../components/header"
import Footer from "../components/footer"
import SideBar from "../components/sidebar"
import Logo from "../components/logo"

// import UpArrow from "../components/upArrow"

const Main = styled.main``
const currentPage = { name: "Work Experience", link: "/WorkExperience" }
const initialState = { menuOpen: false }

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
        <title>Ofek's Website - Work Experience</title>
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

        <WorkGrid></WorkGrid>
        <AmazonArticle></AmazonArticle>
        <FluidsArticle></FluidsArticle>
        <Logo></Logo>
        <Footer></Footer>
      </Main>
    </GlobalLayout>
  )
}

export default Page
