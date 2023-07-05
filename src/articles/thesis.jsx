import React from "react"
import Article from "./article"

// import QRTracking_drone from "../Images_and_Videos/Thesis/QRTracking_Drone.mp4"
// import QRTracking_human from "../Images_and_Videos/Thesis/QRTracking_human.mp4"
// import QRTracking_yaw from "../Images_and_Videos/Thesis/QR_Tracking_Yaw.mp4"
// import QRTracking_yaw_poster from "../Images_and_Videos/Thesis/QR_Tracking_Yaw_poster.png"

import EverflyDemo from "../Images_and_Videos/Thesis/EverFlyDemo.mp4"
import EverFlyDemo_Poster from "../Images_and_Videos/Thesis/EverFlyDemo_Poster.png"

import EverFlyDemo_PDF from "../Images_and_Videos/Thesis/Bachek_Lawrie_Peres_Roth_Senior_Thesis.pdf"

import gears from "../Images_and_Videos/Backgrounds/gears.png"
const thesisArticle = {
  metadata: {
    backgroundColor: "#262626",
    color: "#FCF7FF",
    id: "Thesis",
  },
  SectionHeader: {
    //   first 2 hex values are transparency
    backgroundColor: "#000000",
    text: "Everfly: An Autonomous Drone Battery Exchange System",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "For my senior thesis I worked in a small team to build a fully autonomous battery swapping mechanism for drones. Inspired by mid-flight refueling and aircraft carriers, we addressed one of the largest problems for lightweight drones: short flight-times.",
    },
    Entries: [
      { type: "SectionBreak", color: "#FCF7FF" },
      {
        type: "SectionEntry",
        text: "For the project to succeed, two vital components were accomplished in parallel. The first component was the development of a control system for the DJI Tello Edu. The Tello was chosen for its ability to fly indoors, crucial for winter testing, as well as its programability in python.",
      },
      {
        type: "SectionEntry",
        text: "The second component developed was the battery swapping mechanism. Our goal was to build a fully autonomous swapping mechanism that required minimal modifications to the Tello to function.",
      },
      {
        type: "SectionEntry",
        text: "My chief responsibilities throughout the project were the Guidance Navigation and Control (GNC) system for the drone as well as the control systems for the various moving parts. In addition, I worked together with my teamates on the design and analysis of Everfly and its many components.",
      },
      { type: "SectionBreak", color: "#FCF7FF" },
      {
        type: "SectionTitle",
        text: "Everfly in Action",
      },
      {
        type: "Video",
        video: EverflyDemo,
        poster: EverFlyDemo_Poster,
        loop: true,
      },
      { type: "SectionBreak", color: "#FCF7FF" },

      {
        type: "SectionTitle",
        text: "Project Results",
      },
      {
        type: "SectionEntry",
        text: "Overall, Everfly was a resounding success. My team won the first place award for best thesis and we were all inducted into the Sigma Xi Honor Society. If you would like to read Everfly's full report, you can find it below.",
      },
      {
        type: "SectionEntry",
        link: true,
        to: EverFlyDemo_PDF,
        text: "Download Everfly Report",
        centered: true,
      },

      { type: "SectionBreak", color: "#FCF7FF" },
      {
        type: "VariableGridContainer",
        left: 1,
        right: 2,
        top: 1,
        bot: 5,
        image: gears,
        alt: "Gears",
      },
      {
        type: "VariableGridContainer",
        left: 3,
        right: 3,
        top: 7,
        bot: 12,
        image: gears,
        alt: "Gears",
      },
    ],
  },
}

const ThesisArticle = () => (
  <Article
    metadata={thesisArticle.metadata}
    SectionHeaderData={thesisArticle.SectionHeader}
    ArticleBodyData={thesisArticle.ArticleBody}
  ></Article>
)

export default ThesisArticle
