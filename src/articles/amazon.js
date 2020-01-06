import React from "react"
import Article from "./article"
import react_logo from "../Images_and_Videos/Amazon/react_logo.png"
import aws_certified_logo from "../Images_and_Videos/Amazon/aws-certified-logo.png"

const amazonArticle = {
  metadata: {
    backgroundColor: "white",
    color: "#EFA10B",
    id: "Amazon",
  },
  SectionHeader: {
    backgroundColor: "#EFA10B",
    text: "Amazon Web Services",
    color: "black",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "During Summer 2019 I worked at amazon web services as a solutions architect intern.",
    },
    Entries: [
      { type: "SectionBreak", color: "#EFA10B" },
      { type: "SectionSubTitle", text: "What I learned" },
      {
        type: "SectionEntry",
        text:
          "Throughout my internship, I worked with the Automated Architectural Guidance team. To better help the team, I learned javascript and react to assist with the development of a tool to help automatically create guided conversations for self help with AWS tools.",
      },
      {
        type: "SectionEntry",
        text:
          "I also earned the Associate Solutions Architect certification! Check out my validation by clicking the logo below!",
      },

      {
        type: "Image",
        image: aws_certified_logo,
        alt: "The AWS Certification logo",
        link: true,
        to: "http://aws.amazon.com/verification",
        width: "50%",
      },
      {
        type: "SectionEntry",
        text: "Validation Number: DKCM4BD13BB11VSQ",
        centered: true,
      },
      { type: "Image", image: react_logo, alt: "The React Logo", width: "60%" },
      { type: "SectionBreak", color: "#EFA10B" },
    ],
  },
}

export default () => (
  <Article
    metadata={amazonArticle.metadata}
    SectionHeaderData={amazonArticle.SectionHeader}
    ArticleBodyData={amazonArticle.ArticleBody}
  ></Article>
)
