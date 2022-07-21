import React from "react"
import Article from "./article"

const roboticsSandboxArticle = {
  metadata: {
    backgroundColor: "#d1faff",
    color: "black",
    id: "roboticsSandbox",
  },
  SectionHeader: {
    backgroundColor: "#9ea8ba",
    text: "Robotics Simulation Sandbox",
    color: "black",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "I have always wanted to build a tool to help visualize complex mapping and control algorithms. I finally got a chance to build it.",
    },

    Entries: [
      { type: "SectionBreak", color: "#9ea8ba" },
      {
        type: "SectionEntry",
        text: "",
      },
      {
        type: "SectionEntry",
        text:
          "Click here to check out the project live! https://ofekperes.github.io/controls-visualization/",
        link: true,
        to: "https://ofekperes.github.io/controls-visualization/",
      },
      { type: "SectionSubTitle", text: "Project Motivation" },
      {
        type: "SectionEntry",
        text:
          "I am a visual learner. If I can visualize complex math, I gain a sense of intuition that is crucial down the line when it comes to solving tougher challenges. In the field of robotics, many of the algorithms translate directly to real world applications. Mapping and Control algorithms are especially useful to visualize because by definition they apply to physical systems. When I first began taking robotics courses, I had trouble internalizing some of the material because the algorithms were just written as blocks of code on a slide. I wanted to build a tool that would help me and other students like me gain a sense of intuition for these algorithms.",
      },
      { type: "SectionSubTitle", text: "What I built" },
      {
        type: "SectionEntry",
        text:
          "Linked above, you will find a webapp I built. For my physical system, I picked Dubin's Car, a mathematical model of a vehicle. Around this system, I built functionality and animations to visualize how a car would drive from point a to point b (i.e. its controls), as well as functionality to figure out a path from point a to point b through an obstacle course (i.e. mapping). Together, I was able to create an application where users can interact with the car, define obstacles, and ultimately animate the car autonomously through arbitrary obstacle courses.",
      },

      { type: "SectionBreak", color: "#9ea8ba" },
    ],
  },
}

export default () => (
  <Article
    metadata={roboticsSandboxArticle.metadata}
    SectionHeaderData={roboticsSandboxArticle.SectionHeader}
    ArticleBodyData={roboticsSandboxArticle.ArticleBody}
  ></Article>
)
