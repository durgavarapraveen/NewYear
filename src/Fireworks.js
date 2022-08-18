import React from "react";
import Particle from "react-tsparticles";

const Fireworks = ({ particlesInit, particlesLoaded }) => {
  return (
    <div>
      <h1 className="text-white display-3 fw-bold mt-5 text-center">
        Congratulations
      </h1>
      <h3 className="text-white fs-5 mt-3 mb-5 text-center">
        You are among the top 5% of the people who have reached here.
      </h3>
      <div className="trophy d-flex justify-content-center mt-5">
        <i className="fa-solid fa-award t-1"></i>
        <i className="fa-solid fa-award t-2"></i>
        <i className="fa-solid fa-award t-3"></i>
      </div>
      <div className="text-center mt-4 pt-4">
        <button className="btn btn-danger fs-3 fw-bold text-white">
          Keep Going ---->
        </button>
      </div>
      <Particle
        id="tsparticles"
        className="fireworks"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
          },
          detectRetina: true,
          background: {
            color: "#000",
          },
          fpsLimit: 60,
          emitters: {
            direction: "top",
            life: {
              count: 0, //no. of fireworks
              duration: 0.1,
              delay: 0.1,
            },
            rate: {
              delay: 0.03,
              quantity: 1,
            },
            size: {
              width: 100,
              height: 0,
            },
            position: {
              y: 100,
              x: 50,
            },
          },
          particles: {//properties of the main firework particle
            number: {
              value: 0, //to ramdomiser the number of particles
            },
            destroy: {
              mode: "split", //to get the fireworks effect
              split: {
                rate: {
                  value: 100, //amount of splits
                },
                particles: {
                  // setting properties of those particles formed after spliting
                  color: {
                    value: [
                      "#FFC0CB" /*Pink*/,
                      "#FFB6C1" /*LightPink*/,
                      "#FF69B4" /*HotPink*/,
                      "#FF1493" /*DeepPink*/,
                      "#DB7093" /*PaleVioletRed*/,
                      "#C71585" /*MediumVioletRed*/,
                      "#00FFFF", //acqua
                      "rgb(124, 252, 0)", //grassy green
                    ],
                  },
                  opacity: {
                    value: 1,
                    animation: {
                      enable: true,
                      speed: 0.2,
                      minimumValue: 0.1,
                      sync: false,
                      startValue: "max", //multiple fireworks
                      destroy: "min",
                    },
                  },
                  shape: {
                    type: "star",
                  },
                  size: {
                    value: 1,
                    animation: {
                      enable: false, //to get the sparkly feeling
                    },
                  },
                  life: {
                    count: 1, //amount of time
                    duration: {
                      value: {
                        min: 1,
                        max: 2,
                      },
                    },
                  },
                  move: {
                    //all about firework showers
                    enable: true, // to get the fireworks effect
                    gravity: {
                      enable: false, //stops gravity from pullinhg them up
                    },
                    speed: 3, //speed of the fireworks
                    direction: "none", //direction of the fireworks
                    outMode: "destroy", // avoids overlapping of fireworks
                  },
                },
              },
            },
            life: {
              count: 1,
            },
            shape: {
              type: "line",
            },
            size: {
              value: { min: 1, max: 100 },
              animation: {
                enable: true,
                sync: true,
                speed: 150,
                startValue: "random",
                destroy: "min",
              },
            },
            stroke: {
              color: {
                value: "#383838",
              },
              width: 1,
            },
            rotate: {
              path: true,//single path 
            },
            move: {
              enable: true,
              gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,//to avoid projectiles and follow a st line
                maxSpeed: 100,
              },
              speed: { min: 10, max: 20 },
              outModes: {
                default: "destroy",
              },
              trail: {// to give the split particle a trail so that we can see its dirn
                enable: true,
                length: 10,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Fireworks;
