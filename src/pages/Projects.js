import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { animateScroll as scroll, scrollSpy, Events } from "react-scroll"

import GlobalLayout from "../components/global_layout"
import "../styles/main.css"
import "../styles/burgermenu.css"
import ProjectGrid from "../components/projectgrid"

import ThesisArticle from "../articles/thesis"
import RoboticsSandboxArticle from "../articles/roboticssandbox"
import WordGameHelperArticle from "../articles/wordgamehelper"
import SarrArticle from "../articles/sarr"
import MotionPlanningArticle from "../articles/motionplanning"
import PendulumArticle from "../articles/pendulum"
import CraneArticle from "../articles/crane"
import BenchPressArticle from "../articles/benchpress"
import InfiniteRunner from "../articles/infiniterunner"

import HeaderBar from "../components/header"
import Footer from "../components/footer"
import SideBar from "../components/sidebar"

import UpArrow from "../components/upArrow"
import Logo from "../components/logo"
import QRCodeGeneratorArticle from "../articles/qrcodegenerator"

const Main = styled.main``
const currentPage = { name: "Projects", link: "/Projects" }
const initialState = { menuOpen: false }

const Page = () => {
  const [state, setState] = useState(initialState)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const handleStateChange = (state) => {
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
    Events.scrollEvent.register("begin", function (to, element) {
      // console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function (to, element) {
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
        <title>Ofek's Website - Projects</title>
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

        <ProjectGrid></ProjectGrid>

        <ThesisArticle></ThesisArticle>
        <RoboticsSandboxArticle></RoboticsSandboxArticle>
        <WordGameHelperArticle></WordGameHelperArticle>
        <SarrArticle name="SARR"></SarrArticle>
        <QRCodeGeneratorArticle></QRCodeGeneratorArticle>
        <MotionPlanningArticle></MotionPlanningArticle>
        <InfiniteRunner />
        <PendulumArticle></PendulumArticle>
        <CraneArticle></CraneArticle>
        <BenchPressArticle></BenchPressArticle>
        <UpArrow onClick={scrollToTop}></UpArrow>
        <Logo></Logo>

        <Footer></Footer>
      </Main>
    </GlobalLayout>
  )
}

export default Page
