import React from "react"
import Article from "./article"
import sarr_video from "../Images_and_Videos/SARR/Search_and_Rescue_Robot.mp4"
import sarr_video_poster from "../Images_and_Videos/SARR/3-view.png"
import sarr_sensors from "../Images_and_Videos/SARR/Sensors.png"
const sarrArticle = {
  metadata: {
    backgroundColor: "#F7BFBF",
    color: "black",
    id: "SARR",
  },
  SectionHeader: {
    backgroundColor: "#F08080",
    text: "Search and Rescue Robot",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "Worked with a talented team to design, build, and deploy a fully autonomous Search and Rescue Robot named Newt.",
    },
    Entries: [
      { type: "SectionBreak" },
      { type: "Video", video: sarr_video, poster: sarr_video_poster },
      {
        type: "SectionEntry",
        text:
          "The above video is Newt going through an obstacle course completely autonomously. Newt is able to climb walls, track moving light sources and deliver a payload all while actively avoiding obstacles.",
      },
      { type: "SectionBreak" },
      { type: "SectionTitle", text: "Sensor Fusion | Classical Control" },
      { type: "Image", image: sarr_sensors, alt: "An image of Newt's sensors" },
      {
        type: "SectionEntry",
        text:
          "Newt utilized an amalgamation of sensors to successfully accomplish its tasks.",
      },
      {
        type: "SectionEntry",
        text:
          "Two light sensors, placed beneath Newt, were used as inputs into a proportional-derivative control system to guide Newt to a moving emergency beacon.",
      },
      {
        type: "SectionEntry",
        text:
          "5 infrared proximity sensors were used for safety, robustness, and reliability in collision avoidance tasks.",
      },
      {
        type: "SectionEntry",
        text:
          "A 3 axis accelerometer was utilized for “balance” during wall breach, allowing Newt to know its state of ascension.",
      },
      { type: "SectionBreak" },
      {
        type: "SectionSubTitle",
        text: "What I learned",
      },
      {
        type: "SectionEntry",
        text:
          "My key responsibilities were the software and control system of Newt. Utilizing skills I learned in my computer science and controls courses to develop software for a physical robot made from scratch was extremely satisfying.",
      },
      {
        type: "SectionEntry",
        text:
          "I gained extremely valuable hardware debugging skills throughout the iterations of trial and error that resulted in Newt’s final build. I also learned how to convert a PID control loop into a discrete PID system, as that is how Newt’s on board computer operated.",
      },
      {
        type: "SectionEntry",
        text:
          "Working in a large group demands excellent communication. Asking for help and being able to chip in when needed was vital to the team’s success. Throughout the project, I honed my communication skills.",
      },
      { type: "SectionBreak" },
    ],
  },
}

export default () => (
  <Article
    metadata={sarrArticle.metadata}
    SectionHeaderData={sarrArticle.SectionHeader}
    ArticleBodyData={sarrArticle.ArticleBody}
  ></Article>
)
