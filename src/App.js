import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import christmas from "./image/image3.jpg";
import grinch from "./image/grinch2.jpg";
import santa from "./image/santa.jpg";
import Tilt from "react-tilt";

import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSleigh,
  faCandyCane,
  faSnowman
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div>
        <Particles className="particles" params={particleOptions} />
        <h1 class="merry">
          <span class="snowman">
            <FontAwesomeIcon icon={faSnowman} />
          </span>
          Merry Christmas
          <span class="cane">
            <FontAwesomeIcon icon={faCandyCane} />
          </span>
        </h1>

        <Carousel class="carousel" indicators={false}>
          <Carousel.Item>
            <div class="img-div">
              <Tilt options={tiltOptions}>
                <img src={christmas} alt="" />
              </Tilt>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="img-div">
              <Tilt options={tiltOptions}>
                <img src={grinch} alt="" />
              </Tilt>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="img-div">
              <Tilt options={tiltOptions}>
                <img src={santa} alt="" />
              </Tilt>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="row">
          <div className=" sleigh col-lg-4">
            <FontAwesomeIcon icon={faSleigh} spin size={"3x"} />
          </div>
          <div className=" sleigh col-lg-4">
            <FontAwesomeIcon icon={faSleigh} spin size={"3x"} />
          </div>
          <div className=" sleigh col-lg-4">
            <FontAwesomeIcon icon={faSleigh} spin size={"3x"} />
          </div>
        </div>
      </div>
    );
  }
}

const particleOptions = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false
      }
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      direction: "bottom",
      out_mode: "out"
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

const tiltOptions = {
  options: {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 200, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)"
  }
};

export default App;
