import React from "react"
import Article from "./article"

import QRTracking_drone from "../Images_and_Videos/Thesis/QRTracking_Drone.mp4"
import QRTracking_human from "../Images_and_Videos/Thesis/QRTracking_human.mp4"

const thesisArticle = {
  metadata: {
    backgroundColor: "#262626",
    color: "#FCF7FF",
    id: "Thesis",
  },
  SectionHeader: {
    //   first 2 hex values are transparency
    backgroundColor: "#000000",
    text: "Autonomous Battery Swapping",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "For my senior thesis I am working in a small team to build a fully autonomous battery swapping mechanism for drones. Inspired by mid-flight refueling and aircraft carriers, we hope to remedy one of the largest problems for lightweight drones: short flight-times.",
    },
    Entries: [
      { type: "SectionBreak", color: "#FCF7FF" },
      {
        type: "SectionEntry",
        text:
          "For the project to succeed, two vital components are being accomplished in parallel. The first component is the  development of a control system for the DJI Tello Edu. This drone was chosen for its ability to fly indoors, crucial for winter testing, as well as its programability in python.",
      },
      {
        type: "SectionEntry",
        text:
          "The second component being developed is the battery swapping mechanism. Our goal is to build a fully autonomous swapping mechanism while modifying the drone as little as possible.",
      },
      {
        type: "SectionEntry",
        text:
          "My chief responsibilities throughout this project are the control systems for the various moving parts. In addition, I actively help with the design and analysis of components.",
      },
      { type: "SectionBreak", color: "#FCF7FF" },

      {
        type: "SectionTitle",
        text: "Computer Vision | QR Code Tracking",
      },
      {
        type: "SectionEntry",
        text:
          "This project is currently in development and will be  updated with major developments as they occur.",
      },
      {
        type: "SectionEntry",
        text:
          "Currently, I have developed phase 1 of the drone’s control system: centering on a QR code. In its final form, the drone will travel towards the base station when low on battery, center itself on a QR code, land, have its battery replaced with a fresh one, and continue in its task. ",
      },
      {
        type: "SectionEntry",
        text:
          "Check out how the control algorithm works from the drone’s perspective and from an observer’s perspective!",
      },

      { type: "VideoCaption", text: "Drone POV" },
      { type: "Video", video: QRTracking_drone },
      { type: "VideoCaption", text: "Human Drone POV" },
      { type: "Video", video: QRTracking_human },
      { type: "SectionBreak", color: "#FCF7FF" },
    ],
  },
}

export default () => (
  <Article
    metadata={thesisArticle.metadata}
    SectionHeaderData={thesisArticle.SectionHeader}
    ArticleBodyData={thesisArticle.ArticleBody}
  ></Article>
)
