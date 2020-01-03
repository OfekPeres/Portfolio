import React from "react"
import Article from "./article"
import pendulum_video from "../Images_and_Videos/Inverted_Pendulum/pendulumVideo.mp4"

const pendulumArticle = {
  metadata: {
    backgroundColor: "#5A839A",
    color: "#FCF7FF",
    id: "Rotary Inverted Pendulum",
  },
  SectionHeader: {
    backgroundColor: "#3E6E89",
    text: "Rotary Inverted Pendulum",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "Utilized Matlab, Simulink, and a Quanser board to implement a Linear Quadratic Regulator (LQR) to balance a rotary inverted pendulum that was robust to disturbances.",
    },
    Entries: [
      { type: "SectionBreak", color: "#FCF7FF" },
      { type: "Video", video: pendulum_video },

      { type: "SectionBreak", color: "#FCF7FF" },
    ],
  },
}

export default () => (
  <Article
    metadata={pendulumArticle.metadata}
    SectionHeaderData={pendulumArticle.SectionHeader}
    ArticleBodyData={pendulumArticle.ArticleBody}
  ></Article>
)
