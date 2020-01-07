import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

const ParticleContainer = styled.div`
  background-color: #0b0222;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  @media screen and (max-width: 480px) {
    /* display: none; */
  }
`

const ParticleParamsSimple = {
  // particles: {
  //   number: {
  //     value: 120,
  //   },
  //   size: {
  //     value: 1,
  //   },
  // },
  particles: {
    number: {
      value: 20,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 8,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: true,
    },
    move: {
      random: true,
      speed: 3,
      // direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  move: {
    random: true,
    speed: 300,
    direction: "top",
    out_mode: "out",
  },
}

const ParticleParamsBubbles = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 8,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 3,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
}

const ParticlesBackground = ({ ParticleParams }) => {
  return (
    <ParticleContainer>
      <Particles height="100vh" params={ParticleParams} />
    </ParticleContainer>
  )
}

const OfekParticles = ({ simple }) => {
  let params = simple ? ParticleParamsSimple : ParticleParamsBubbles

  return <ParticlesBackground ParticleParams={params}></ParticlesBackground>
}
export default OfekParticles
