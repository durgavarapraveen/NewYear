import Particle from "react-tsparticles";
import React, { useEffect, useState } from 'react'
import './Components/NewYear.css'
import { motion, useAnimation } from "framer-motion"
import ballon from './assests/xxr2_lept_190721-removebg-preview.png'

const Fireworks = ({ particlesInit, particlesLoaded }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [BallonVisible, setBallonVisible] = useState(false);
  const controls = useAnimation();
  const BallonControls = useAnimation();

  const stickVariants = {
    initial: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.5 } },
    rotated: { scaleX: 0, transition: { duration: 2 } },
  };

  const BallonVariants = {
    initial: { x: 0 },
    visible: { x: -130, transition: { duration: 2 } },
    moveup: { y: -1000, transition: { duration: 5 } }
  }



  useEffect(() => {
    const sequence = async () => {
      await controls.start('visible');
      await controls.start('rotated');
    };

    const BallonSequence = async () => {
      await BallonControls.start('visible');
      await BallonControls.start('moveup')
    }

    setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    setTimeout(() => {
      setBallonVisible(true);
    }, 6500)

    if (BallonVisible) {
      BallonSequence();
    }

    if (isVisible) {
      sequence();
    }


  }, [controls, isVisible, BallonControls, BallonVisible]);

  return (
    <div>

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
