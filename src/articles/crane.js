import React from "react"
import Article from "./article"
import crane_video from "../Images_and_Videos/Crane/crane_video.mp4"
import crane_image from "../Images_and_Videos/Crane/CraneImage.png"
import real_crane from "../Images_and_Videos/Crane/RealCraneImage.jpg"
import deformed_crane from "../Images_and_Videos/Crane/FinalDeformed.jpg"
const craneArticle = {
  metadata: {
    backgroundColor: "#E8FBFC",
    color: "#000000",
    id: "Crane",
  },
  SectionHeader: {
    backgroundColor: "#D6F8F9",
    text: "Crane Design",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "Won first place in a crane design competition. Lifted 325 pounds with a crane that weighed 1 pound and 1 ounce.",
    },
    Entries: [
      { type: "SectionBreak" },
      {
        type: "Image",
        image: crane_image,
        alt: "The CAD model for our crane.",
      },

      { type: "SectionBreak", color: "#FCF7FF" },
      {
        type: "SectionEntry",
        text:
          "Worked in a small team to design, analyze and optimize a crane in Creo. One of the key components to our success was using the CNC mill to build our crane from one solid piece of aluminum, minimizing the number of rivets and connecting components.",
      },
      {
        type: "SectionEntry",
        text:
          "The following are a video of the 325 pound stress test, an image of the crane before testing, and an image of the crane after testing with 425 pounds, over 30% additional weight over the required weight.",
      },
      {
        type: "Video",
        video: crane_video,
      },
      {
        type: "CraneCaption",
        text: "Before",
        side: "right",
        image: real_crane,
        alt: "Crane in testing stand right before testing began",
      },
      {
        type: "CraneCaption",
        text: "After",
        side: "left",
        image: deformed_crane,
        alt:
          "Crane in testing stand right after testing over the weight limit. deformed but did not break!",
      },
      {
        type: "SectionBreak",
      },
    ],
  },
}

export default () => (
  <Article
    metadata={craneArticle.metadata}
    SectionHeaderData={craneArticle.SectionHeader}
    ArticleBodyData={craneArticle.ArticleBody}
  ></Article>
)
