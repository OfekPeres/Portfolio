import React from "react"
import Article from "./article"
import crane_video from "../Images_and_Videos/Crane/crane_video.mp4"
import crane_video_poster from "../Images_and_Videos/Crane/crane_video_poster.png"
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

      { type: "SectionBreak" },
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
        poster: crane_video_poster,
      },
      {
        type: "SectionEntry",
        text:
          "After successfully testing with the required weight of 325 pounds (and winning the competition), the team decided to add an additional hundred pounds.",
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
        type: "SectionEntry",
        text:
          "I am displaying the image of the deformed crane because it demonstrates a few important things to note.",
      },
      {
        type: "SectionEntry",
        text:
          "First, the crane deformed asymmetrically. This is most likely due to workmanship in assembly rather than a faulty design.",
      },
      {
        type: "SectionEntry",
        text:
          "Second, even under forces greater than expected, the crane did not shatter, it yielded. This is an important distinction. A crane that is accidentally used to lift an object heavier than it was designed for and deforming is much safer than a crane that shatters and drops the object.",
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
