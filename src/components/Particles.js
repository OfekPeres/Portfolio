import React, { useCallback } from "react"
import styled from "styled-components"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

const ParticleContainer = styled.div`
  /* width: 100vw; */
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  @media screen and (max-width: 480px) {
    /* display: none; */
  }
`

const ParticleParamsSimple = {
  background: {
    color: {
      value: "#0b0222",
    },
  },
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
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
      enable: true,
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
  background: {
    color: {
      value: "#0b0222",
    },
  },
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
      enable: true,
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
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])
  return (
    <ParticleContainer>
      <Particles
        height="100vh"
        options={ParticleParams}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </ParticleContainer>
  )
}

const OfekParticles = ({ simple }) => {
  let params = simple ? ParticleParamsSimple : ParticleParamsBubbles
  return <ParticlesBackground ParticleParams={params}></ParticlesBackground>
}
export default OfekParticles
