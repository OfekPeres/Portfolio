import React from "react"
import Article from "./article"
import lockheed_logo from "../Images_and_Videos/LockheedMartin/lm-logo.png"
const lockheedArticle = {
  metadata: {
    backgroundColor: "#01478c",
    color: "white",
    id: "Lockheed",
  },
  SectionHeader: {
    backgroundColor: "#023b73",
    text: "Lockheed Martin",
    color: "white",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "After graduating from Princeton in 2020, I joined the Lockheed Martin Space team as a Software Engineer",
    },
    Entries: [
      { type: "SectionBreak", color: "white" },
      { type: "SectionSubTitle", text: "What I'm Working on" },
      {
        type: "SectionEntry",
        text: "Since joining Lockheed, I have truly been a full stack developer. I have worked with legacy c++ code, microservices written in c# and java, desktop applications written in WPF, frontend applications written in Angular and React, and worked on containerizing both the frontend and backend with docker.",
      },
      {
        type: "SectionEntry",
        text: "My background and versatility have allowed me to really help out the team in a wide array of capacities.",
      },
      {
        type: "Image",
        image: lockheed_logo,
        alt: "The Lockheed Martin Logo",
        width: "60%",
      },
      { type: "SectionBreak", color: "white" },
    ],
  },
}

const LockheedMartinArticle = () => (
  <Article
    metadata={lockheedArticle.metadata}
    SectionHeaderData={lockheedArticle.SectionHeader}
    ArticleBodyData={lockheedArticle.ArticleBody}
  ></Article>
)

export default LockheedMartinArticle
