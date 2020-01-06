import React from "react"
import Article from "./article"

import rheometer from "../Images_and_Videos/Fluids/Rheometer.jpg"

const fluidsArticle = {
  metadata: {
    backgroundColor: "#C4DFEB",
    color: "black",
    id: "Fluids",
  },
  SectionHeader: {
    backgroundColor: "#B4D7E6",
    text: "Complex Fluids Group",
  },
  ArticleBody: {
    SectionBlurb: {
      text:
        "Worked as an undergraduate researcher at the Complex Fluids group at Princeton.",
    },
    Entries: [
      { type: "SectionBreak" },
      { type: "SectionSubTitle", text: "What I Did" },
      {
        type: "SectionEntry",
        text:
          "I researched the dynamical and mechanical properties of polyelectrolyte solutions such as shear viscosity and viscous and elastic moduli, as a function of salt type and concentration. ",
      },
      {
        type: "SectionEntry",
        text:
          "Some of the applications include alternative, environmentally friendly, fracking solutions for the energy sector.",
      },
      {
        type: "SectionEntry",
        text:
          "I analyzed, collected, and reported mechanical attributes of xanthan gum solutions with the Anton Paar 301 Rheometer and then generated predictive analytics using the python suite of tools, including pandas, numpy and matplotlib",
      },
      {
        type: "Image",
        image: rheometer,
        alt: "A Rheometer",
        width: "50%",
      },
      {
        type: "SectionEntry",
        text: "Above is an image of the Anton Paar 301 Rheometer",
        centered: true,
      },
      { type: "SectionSubtitle", text: "What I Learned" },
      {
        type: "SectionEntry",
        text:
          "Of the things I learned, the two skills that I want to highlight are the Rheometer and Python.",
      },
      {
        type: "SectionEntry",
        text:
          "The Rheometer is a highly specialized, programmable piece of lab equipment. It applies a shearing force to fluids that are loaded into it;  based on the fluid’s response, it calculates a variety of physical parameters for the inputted solution.  I learned how to properly load, clean, and program the Rheometer from Antonio Perazzo, a Post Doctoral student in the lab.",
      },
      {
        type: "SectionEntry",
        text:
          "After the initial learning phase, I regularly conducted my own experiments to collect data. I wrote Python scripts customized to clean the data and generate analytics. My figures and tables were clear and organized, crucial in determining future steps of research.",
      },
      {
        type: "SectionEntry",
        text:
          "One of the Python packages that I want to highlight is Pandas. I utilized Pandas extensively throughout the research for data analytics. The expertise I gained with it was extremely valuable to me when I went on to a variety of Machine Learning Courses that used Pandas regularly for data processing.",
      },

      { type: "SectionBreak" },
    ],
  },
}

export default () => (
  <Article
    metadata={fluidsArticle.metadata}
    SectionHeaderData={fluidsArticle.SectionHeader}
    ArticleBodyData={fluidsArticle.ArticleBody}
  ></Article>
)
