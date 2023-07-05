import React from "react"
import Article from "./article"

const infiniteRunnerArticle = {
  metadata: {
    // backgroundColor: "#9f2305",
    backgroundColor: "#930404",
    color: "white",
    id: "infiniteRunner",
  },
  SectionHeader: {
    backgroundColor: "#b82d2d",
    text: "3D Game Development - Infinite Runner",
    color: "white",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "Video games are an interesting genre of programming. I wanted to work with something 3D and learn about how event driven systems like video games work behind the scenes",
    },
    Entries: [
      { type: "SectionBreak", color: "#b82d2d" },
      {
        type: "SectionEntry",
        text: "Click here to see the game live live! https://ofekperes.github.io/infinite-runner/",
        link: true,
        to: "https://ofekperes.github.io/infinite-runner/",
      },
      { type: "SectionSubTitle", text: "What I learned" },
      {
        type: "SectionEntry",
        text: "Computer Grapics, especially in 3D, is cool! I worked with libraries like ThreeJS and Babylon to bring to life CAD models and interact with them programatically. Event driven systems are a different type of programming than what I had previously worked with. Relying on a player's input before calling a function to update the game is an interesting way to think about a problem.",
      },
    ],
  },
}

const InfiniteRunnerArticle = () => (
  <Article
    metadata={infiniteRunnerArticle.metadata}
    SectionHeaderData={infiniteRunnerArticle.SectionHeader}
    ArticleBodyData={infiniteRunnerArticle.ArticleBody}
  ></Article>
)

export default InfiniteRunnerArticle
