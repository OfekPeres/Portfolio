import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { animateScroll as scroll, scrollSpy, Events } from "react-scroll"

import GlobalLayout from "../components/global_layout"
import "../styles/main.css"

import ProjectGrid from "../components/projectgrid"
import SarrArticle from "../articles/sarr"
import MotionPlanningArticle from "../articles/motionplanning"
import ThesisArticle from "../articles/thesis"
import PendulumArticle from "../articles/pendulum"
import CraneArticle from "../articles/crane"
import BenchPressArticle from "../articles/benchpress"

const Main = styled.main``

const Page = () => {
  function scrollToTop() {
    scroll.scrollToTop()
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
    <GlobalLayout>
      <Main id="main-content">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ofek's Website</title>
        </Helmet>
        <div className="element-active-on-screen"></div>
        <ProjectGrid></ProjectGrid>
        <SarrArticle></SarrArticle>
        <MotionPlanningArticle></MotionPlanningArticle>
        <ThesisArticle></ThesisArticle>
        <PendulumArticle></PendulumArticle>
        <CraneArticle></CraneArticle>
        <BenchPressArticle></BenchPressArticle>
      </Main>
    </GlobalLayout>
  )
}

export default Page
