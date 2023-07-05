import React from "react"
import Article from "./article"
import crazyflie from "../Images_and_Videos/Robotics/CrazyFlie.jpg"
import astar_clean from "../Images_and_Videos/Robotics/astar_clean.png"
import RRT_image from "../Images_and_Videos/Robotics/RRT.png"
import PRM_image from "../Images_and_Videos/Robotics/PRM.jpg"

import particleFilterVideo from "../Images_and_Videos/Robotics/particle_filter.mp4"
import particleFilterVideo_poster from "../Images_and_Videos/Robotics/particle_filter_poster.png"

import ObstacleAvoidance_behind from "../Images_and_Videos/Robotics/ObstacleAvoidancePOV_behind.mp4"
import ObstacleAvoidance_behind_poster from "../Images_and_Videos/Robotics/ObstacleAvoidancePOV_behind_poster.png"

import ObstacleAvoidance_side from "../Images_and_Videos/Robotics/ObstacleAvoidance_side.mp4"
import ObstacleAvoidance_side_poster from "../Images_and_Videos/Robotics/ObstacleAvoidance_side_poster.png"

// Final Project videos
import wall_frontview from "../Images_and_Videos/Robotics/wall_frontview.mp4"
import wall_frontview_poster from "../Images_and_Videos/Robotics/wall_frontview_poster.png"
import wall_droneview from "../Images_and_Videos/Robotics/wall_droneview.mp4"
import wall_droneview_poster from "../Images_and_Videos/Robotics/wall_droneview_poster.png"

import triangle_frontview from "../Images_and_Videos/Robotics/triangle_frontview.mp4"
import triangle_frontview_poster from "../Images_and_Videos/Robotics/triangle_frontview_poster.png"
import triangle_sideview from "../Images_and_Videos/Robotics/triangle_sideview.mp4"
import triangle_sideview_poster from "../Images_and_Videos/Robotics/triangle_sideview_poster.png"
import triangle_droneview from "../Images_and_Videos/Robotics/triangle_droneview.mp4"
import triangle_droneview_poster from "../Images_and_Videos/Robotics/triangle_droneview_poster.png"

import twoon1_frontview from "../Images_and_Videos/Robotics/2on1_frontview.mp4"
import twoon1_frontview_poster from "../Images_and_Videos/Robotics/2on1_frontview_poster.png"
import twoon1_droneview from "../Images_and_Videos/Robotics/2on1_droneview.mp4"
import twoon1_droneview_poster from "../Images_and_Videos/Robotics/2on1_droneview_poster.png"

import gear_black from "../Images_and_Videos/Backgrounds/gear-black.png"
import gear_white from "../Images_and_Videos/Backgrounds/gear-white-big.png"
// import gear_white_small from "../Images_and_Videos/Backgrounds/gear-white-small.png"
// import gear_black_big from "../Images_and_Videos/Backgrounds/gear-black-big.png"

const motionPlanningArticle = {
  metadata: {
    backgroundColor: "#B6F1E8",
    color: "black",
    id: "Motion Planning",
  },
  SectionHeader: {
    //   first 2 hex values are transparency
    backgroundColor: "#6EE3D1",
    text: "Motion Planning & Localization",
  },
  ArticleBody: {
    SectionBlurb: {
      text: "Developed algorithms to fly a Crazyflie drone through an obstacle course.",
    },
    Entries: [
      { type: "SectionBreak" },
      {
        type: "SectionTitle",
        text: "CrazyFlie",
        className: "FatFace",
      },
      {
        type: "Image",
        image: crazyflie,
        alt: "An image of a crazyflie drone.",
        width: "50%",
        align: "center",
      },
      {
        type: "SectionEntry",
        text: "Throughout my Robotics course, I learned and implemented in Python, a variety of motion planning and localization algorithms. For the final project, I worked in a small team to fly a drone through any arbitrary obstacle course. Below, please find some of my favorite parts of the course.",
      },
      { type: "SectionBreak" },
      // Final Project - 2/2/2020
      {
        type: "SectionTitle",
        text: "Final Project",
      },
      {
        type: "SectionEntry",
        text: "For the final project in robotics, I implemented Reactive Planning utilizing Computer Vision to guide a quadcopter through a never before seen, dynamic obstacle course.",
      },
      // Videos go here
      { type: "VideoCaption", text: "Dynamic Obstacle Course" },
      {
        type: "Video",
        video: twoon1_frontview,
        poster: twoon1_frontview_poster,
      },
      {
        type: "Video",
        video: twoon1_droneview,
        poster: twoon1_droneview_poster,
      },

      { type: "VideoCaption", text: "Pyramid Structure" },
      {
        type: "Video",
        video: triangle_frontview,
        poster: triangle_frontview_poster,
      },
      {
        type: "Video",
        video: triangle_sideview,
        poster: triangle_sideview_poster,
      },
      {
        type: "Video",
        video: triangle_droneview,
        poster: triangle_droneview_poster,
      },

      { type: "VideoCaption", text: "Wall-like Structure" },
      { type: "Video", video: wall_frontview, poster: wall_frontview_poster },
      { type: "Video", video: wall_droneview, poster: wall_droneview_poster },
      {
        type: "SectionEntry",
        text: "The control system had 3 key components: identifying obstacles, finding a safe path, and sending control inputs to the Crazyflie.",
      },
      {
        type: "SectionEntry",
        text: "To identify obstacles, I utilized the onboard camera and opencv to find the PVC pipes. Utilizing a color mask, I was able to find all pixels that were the same color as the PVC pipes. Then, I defined an obstacle as clusters of more than 20 pixels.",
      },
      {
        type: "SectionEntry",
        text: "Once obstacles were identified, the control system found and targeted the largest gap between any of the obstacles. ",
      },
      {
        type: "SectionEntry",
        text: "Lastly, the flat output space control inputs,  the x, y, z, and yaw positions, were sent to the Crazyflie to guide it towards the largest gap.",
      },
      {
        type: "SectionSubTitle",
        text: "Additional Details",
      },
      {
        type: "SectionEntry",
        text: "The proportional derivative control algorithm was designed to bring the quadcopter to the target location (the green circle in the videos).",
      },
      {
        type: "SectionEntry",
        text: "Error in the system was calculated as the difference between the target location and the center of the field of view. ",
      },
      {
        type: "SectionEntry",
        text: "Each control input was a step towards the target position, driving the error towards zero.",
      },
      {
        type: "SectionEntry",
        text: "The forward and sideways directions were linked. If the error was small, the drone was able to fly forwards swiftly, without fear of obstacles in its path.",
      },
      {
        type: "SectionEntry",
        text: "However, if the error was large, that meant that there were obstacles in front of the quadcopter. When this happened, the drone slowed its forward motion proportionally to how far to the side it needed to go. This increased the time available to react to obstacles in the center of the field of view and avoided imminent collisions.",
      },
      {
        type: "SectionEntry",
        text: "In order to drive the quadcopter towards the center of the obstacle course, the field of view was restricted based on current position. For example, if the drone flew towards the left, it would prefer finding gaps to fly through in the right side of its field of view. This can visually be seen by the vertical green lines in the drone’s perspective.",
      },
      { type: "SectionBreak" },
      {
        type: "SectionTitle",
        text: "Favorite Algorithms",
      },
      {
        type: "SectionTitle",
        type2: "links",
        links: [
          { text: "A* |", to: "A*" },
          { text: "RRT | ", to: "RRT" },
          { text: "PRM | ", to: "PRM" },
          { text: "RRT* | ", to: "RRT*" },
          { text: "Particle Filters", to: "Particle Filters" },
        ],
      },
      {
        type: "SectionSubTitle",
        text: "A*",
        id: "A*",
      },
      {
        type: "SectionEntry",
        text: "The A* algorithm finds the optimal path from point A to point B by implementing Dijkstra’s algorithm with a heuristic that predicts the cost left to travel as a lower bound of the actual cost to travel.",
      },
      {
        type: "Image",
        image: astar_clean,
        alt: "An image of the astar algorithm finding an optimal path in a map with obstacles.",
      },
      { type: "SectionBreak" },
      {
        type: "SectionSubTitle",
        text: "RRT",
        id: "RRT",
      },
      {
        type: "SectionEntry",
        text: "The Rapidly Exploring Random Tree algorithm, or RRT for short, is one of my favorite algorithms. It is used to find a path from a source location to a target area in continuous space. RRT does not guarantee an optimal path, but as I will demonstrate below, it usually finds a pretty good one! In my implementation, I denoted the obstacles as blue disks and the target area as a green circle.",
      },
      {
        type: "Image",
        image: RRT_image,
        alt: "An image of the astar algorithm finding an optimal path in a map with obstacles.",
      },
      {
        type: "SectionEntry",
        text: "As can be seen in the figure above, the source location in this example is located on the left hand side of the screen at (0,35) and the target area is centered on (120,65). RRT does an excellent job mapping the entire area and finding a path through the different sized obstacles. ",
      },
      {
        type: "SectionEntry",
        text: "I worked in a small team to fly a Crazyflie drone through an obstacle course. We measured the dimensions of the obstacles as well as their locations in order to build a map of the obstacle course. We then inputted the locations of the obstacles into the RRT algorithm we developed in order to find a safe path for our drone.",
      },
      {
        type: "SectionEntry",
        text: "Below you can see the drone fly through the obstacle course and successfully land in the target region!",
      },
      //   Insert the two crazy flie videos here!!
      { type: "VideoCaption", text: "Behind Drone POV" },
      {
        type: "Video",
        video: ObstacleAvoidance_behind,
        poster: ObstacleAvoidance_behind_poster,
      },
      { type: "VideoCaption", text: "Side of Drone POV" },
      {
        type: "Video",
        video: ObstacleAvoidance_side,
        poster: ObstacleAvoidance_side_poster,
      },

      {
        type: "SectionEntry",
        text: "RRT is fantastic at getting a single drone from any place in continuous space to another location in continuous space, if a path exists. However, RRT isn’t great at generating a map that can be used by multiple drones simultaneously or guaranteeing that the path it finds is the best path available. There are two modified versions of RRT that I learned that help deal with this issue.",
      },
      { type: "SectionBreak" },
      {
        type: "SectionSubTitle",
        text: "PRM",
        id: "PRM",
      },
      {
        type: "SectionEntry",
        text: "The Probabilistic Road Map modifies RRT so that rather than developing a branching, tree-like structure, that explores outwards, it develops a network that explores the entire area while avoiding obstacles. Once the network is built, a graph search algorithm, like Breadth First Search (BFS) can be used to get from any point on the graph to any other point on the graph. This small but key distinction from RRT (where the source location is always predefined), allows the PRM algorithm to work for multiple drones at the same time.",
      },
      {
        type: "Image",
        image: PRM_image,
        alt: "An image of the Probabalistic Road Map (PRM) algorithm working on a an example map.",
      },
      {
        type: "SectionEntry",
        text: "In this example, I chose to start in the bottom left corner and go towards the top right corner, but I could have just as easily started and ended anywhere else.",
      },
      { type: "SectionBreak" },
      {
        type: "SectionSubTitle",
        text: "RRT*",
        id: "RRT*",
      },
      {
        type: "SectionEntry",
        text: "RRT* is a variation on the Rapidly Exploring Random Tree algorithm that increases the optimality of the paths. It guarantees that as the number of points picked approaches infinity, the path found will approach the optimal path.",
      },
      {
        type: "SectionEntry",
        text: "Visually, what this means is that paths found with RRT* will approach the target location more directly, rather than meandering randomly towards the target.",
      },
      {
        type: "SectionEntry",
        text: "I have not yet implemented RRT* myself but plan on doing so in the near future!",
      },

      { type: "SectionBreak" },
      {
        type: "SectionSubTitle",
        text: "Particle Filters",
        id: "Particle Filters",
      },
      {
        type: "SectionEntry",
        text: "So far, I have discussed some of my favorite motion planning algorithms. Particle filters are one of the coolest localization methods I learned about.",
      },
      {
        type: "SectionEntry",
        text: "Initially, particles are uniformly distributed throughout an area. Then, a probability distribution is built for every particle that is based on the state of that particle. Next, a weight is given to the particle based on the likelihood of the current sensor reading given the state of the particle. After every particle is given a weight, the particles are resampled with replacement, only keeping the most likely particles. This repeats every time step.",
      },
      {
        type: "Video",
        video: particleFilterVideo,
        loop: true,
        poster: particleFilterVideo_poster,
      },
      {
        type: "SectionEntry",
        text: "In the simulation of a particle filter above, the orange dot represents the location of the robot and the blue dots represent particles. Each particle represents a potential location of the robot. Clusters of particles represent a high probability of the robot being at that location. ",
      },
      {
        type: "SectionEntry",
        text: "In this example, the robot’s sensor measurement was the distance from the origin, with some random sensor error introduced.",
      },
      {
        type: "SectionEntry",
        text: "Due to the symmetry of the simulation, 2 roughly equal clusters of particles emerge. To improve the particle filter and remove the incorrect cluster, the sensor needs a way to break the symmetry of the simulation. One potential way to do so would be to have the sensor report two data points: distance from the origin, and direction.",
      },
      {
        type: "SectionBreak",
      },
      {
        type: "VariableGridContainer",
        left: 1,
        right: 2,
        top: 1,
        bot: 5,
        image: gear_black,
        alt: "Gears",
      },
      {
        type: "VariableGridContainer",
        left: 1,
        right: 2,
        top: 1,
        bot: 5,
        image: gear_white,
        alt: "Gears",
      },
      // {
      //   type: "VariableGridContainer",
      //   left: 3,
      //   right: 4,
      //   top: 7,
      //   bot: 10,
      //   image: gear_black,
      //   alt: "Gears",
      // },
      // {
      //   type: "VariableGridContainer",
      //   left: 3,
      //   right: 4,
      //   top: 7,
      //   bot: 10,
      //   image: gear_white,
      //   alt: "Gears",
      // },
      // {
      //   type: "VariableGridContainer",
      //   left: 3,
      //   right: 4,
      //   top: 7,
      //   bot: 10,
      //   image: gear_white_small,
      //   alt: "Gears",
      // },
      // {
      //   type: "VariableGridContainer",
      //   left: 3,
      //   right: 4,
      //   top: 7,
      //   bot: 10,
      //   image: gear_black_big,
      //   alt: "Gears",
      // },
      // {
      //   type: "VariableGridContainer",
      //   left: 1,
      //   right: 2,
      //   top: 13,
      //   bot: 17,
      //   image: gear_white,
      //   alt: "Gears",
      // },
      // {
      //   type: "VariableGridContainer",
      //   left: 1,
      //   right: 2,
      //   top: 13,
      //   bot: 17,
      //   image: gear_white_small,
      //   alt: "Gears",
      // },
      // {
      //   type: "VariableGridContainer",
      //   left: 1,
      //   right: 2,
      //   top: 13,
      //   bot: 17,
      //   image: gear_black_big,
      //   alt: "Gears",
      // },
    ],
  },
}

const MotionPlanningArticle = () => (
  <Article
    metadata={motionPlanningArticle.metadata}
    SectionHeaderData={motionPlanningArticle.SectionHeader}
    ArticleBodyData={motionPlanningArticle.ArticleBody}
  ></Article>
)

export default MotionPlanningArticle
