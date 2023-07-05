import React from "react"
import Article from "./article"

import bench_press_assembly from "../Images_and_Videos/BenchPress/benchPressAssembly.jpg"
import bench_press_displacement from "../Images_and_Videos/BenchPress/DisplacementAnalysis.png"

const benchpressArticle = {
  metadata: {
    backgroundColor: "#FEFFCD",
    color: "#000",
    id: "Bench Press",
  },
  SectionHeader: {
    backgroundColor: "#FEFFBC",
    text: "Olympic Bench Press",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "Designed an olympic bench press capable of withstanding weights up to 550 pounds. Developed clean, detailed engineering drawings as well as Cad skills",
    },
    Entries: [
      { type: "SectionBreak" },
      {
        type: "Image",
        image: bench_press_assembly,
        alt: "Assembly of an olympic bench press",
      },
      {
        type: "Image",
        image: bench_press_displacement,
        alt: "displacement analysis of olympic bench press",
      },

      {
        type: "SectionEntry",
        text: "The above figure is the displacement analysis when a 550 pound force is applied at the center of mass. The deflection, measured in inches, was significantly less than an inch, even in the worst case.",
      },
      { type: "SectionBreak" },
    ],
  },
}

const BenchpressArticle = () => (
  <Article
    metadata={benchpressArticle.metadata}
    SectionHeaderData={benchpressArticle.SectionHeader}
    ArticleBodyData={benchpressArticle.ArticleBody}
  ></Article>
)

export default BenchpressArticle
