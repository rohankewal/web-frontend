import React, { Component, useState, useEffect } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.useEffect();
    window.addEventListener("resize", this.useEffect);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.useEffect);
  }
  useEffect = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    });
  };
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <Particles
        {...this.state}
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ef233c",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ef233c",
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#ef233c",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    );
  }
}

export default Canvas;

{
  /* updateWindowDimensions */
}