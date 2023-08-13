import React from "react"
import Article from "./article"

const qrCodeGeneratorArticle = {
  metadata: {
    backgroundColor: "white",
    color: "black",
    id: "qrcodegenerator",
  },
  SectionHeader: {
    backgroundColor: "#f6821f",
    text: "QR Code Generator",
    color: "#000000",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "CloudFlare Exploration Project",
    },

    Entries: [
      { type: "SectionBreak", color: "#f6821f" },
      {
        type: "SectionEntry",
        text: "",
      },
      {
        type: "SectionEntry",
        text: "Click here to check out the project live! https://ofeks-qr-code-viewer.pages.dev/",
        link: true,
        to: "https://ofeks-qr-code-viewer.pages.dev/",
      },
      { type: "SectionSubTitle", text: "Project Motivation" },
      {
        type: "SectionEntry",
        text: "I heard great things about the CloudFlare developer experience and wanted to deploy both a website and also test out CloudFlare workers.",
      },
      {
        type: "SectionSubTitle",
        text: "What I built + What I particularly liked",
      },
      {
        type: "SectionEntry",
        text: "Linked above, you will find a webapp I built to generate QR Codes. There are a few fun easter eggs within.",
      },
      {
        type: "SectionEntry",
        text: "Allowing CORS requests to come through for both GET and POST requests was quite doable. I added a handler for an OPTIONS request on the CloudFlare Worker and then I was able to test my app both locally and in production.",
      },
      {
        type: "SectionEntry",
        text: "If you manage to find the worker link directly, and paste it into the browser, it will return a 302 redirect to my personal portfolio :). (Here is the link: https://qr-code-generator.peres-ofek-cloudflare.workers.dev)",
        link: true,
        to: "https://qr-code-generator.peres-ofek-cloudflare.workers.dev",
      },
      {
        type: "SectionEntry",
        text: "For the curious, I built the frontend with SolidJS, which I enjoyed working with. Deploying was a breeze. After building all the html, css, and js into a `dist` folder, I used CloudFlare Wrangler to deploy the frontend to CloudFlare Pages.",
      },
      {
        type: "SectionEntry",
        text: "Deploying the worker was equally straightforward, running Wrangler deploy builds the local javascript and deploys the bundle. Even packages are bundled automatically.",
      },
      {
        type: "SectionEntry",
        text: "My favorite part of working with CloudFlare workers and pages so far has been the effectively immediate update of the deployed project. I think there is probably some cache invalidation behind the scenes during the deployment, because I have noticed that deploying websites to other services often can take up to 10 minutes before the new changes are reflected.",
      },

      { type: "SectionBreak", color: "#f6821f" },
    ],
  },
}

const QRCodeGeneratorArticle = () => (
  <Article
    metadata={qrCodeGeneratorArticle.metadata}
    SectionHeaderData={qrCodeGeneratorArticle.SectionHeader}
    ArticleBodyData={qrCodeGeneratorArticle.ArticleBody}
  ></Article>
)

export default QRCodeGeneratorArticle
