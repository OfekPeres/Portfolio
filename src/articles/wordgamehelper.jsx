import React from "react"
import Article from "./article"

const wordGameHelperArticle = {
  metadata: {
    backgroundColor: "#dbeafe",
    color: "black",
    id: "wordGameHelper",
  },
  SectionHeader: {
    backgroundColor: "#93c5fd",
    text: "Word Game Helper",
    color: "black",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "Sveltekit is considered one of the most loved frontend frameworks. I wanted to give it a try to checkout all of the hype.",
    },

    Entries: [
      { type: "SectionBreak", color: "#93c5fd" },
      {
        type: "SectionEntry",
        text: "",
      },
      {
        type: "SectionEntry",
        text: "Click here to check out the project live! https://word-game-helper-ofekperes.vercel.app/",
        link: true,
        to: "https://word-game-helper-ofekperes.vercel.app/",
      },
      { type: "SectionSubTitle", text: "Project Motivation" },
      {
        type: "SectionEntry",
        text: "I am familiar with React and Angular, having worked with them both for personal and work related projects. Svelte has been popping up in various places for me. After reading a bit about it, and seeing all of the positive feedback, I decided to give it a shot.",
      },
      { type: "SectionSubTitle", text: "What I built" },
      {
        type: "SectionEntry",
        text: "Linked above, you will find a webapp I built to help users with a variety of word games. The app is effectively an anagram and sub-anagram finder. Users can enter any word, pick a dictionary to use as a reference point for what are considered valid words, and the results will be displayed.",
      },

      {
        type: "SectionEntry",
        text: "For the frontend, I used svelte, which was an overall pleasant experience. I had some challenges with understanding how to deploy. Initially I wanted to deploy to github pages but found that the static website that svelte was producing as build output lacked css styles. Instead, I deployed to Vercel, which was a very streamlined process and I would definitely recommend it to others working on Svelte projects. The backend is built with Python and Flask and is deployed to Heroku. If you want to dive deeper into the details of this app, check out the application live and you will be able to find a link to the github repo in the top left corner of the app.",
      },

      { type: "SectionBreak", color: "#93c5fd" },
    ],
  },
}

const WordGameHelperArticle = () => (
  <Article
    metadata={wordGameHelperArticle.metadata}
    SectionHeaderData={wordGameHelperArticle.SectionHeader}
    ArticleBodyData={wordGameHelperArticle.ArticleBody}
  ></Article>
)

export default WordGameHelperArticle
