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

      {/* <div className='Container'>
        <img src='https://jackrugile.com/lab/fireworks-v2/images/skyline.png' alt='Img' className='bg_image' />
        <img src='https://jackrugile.com/lab/fireworks-v2/images/mountains1.png' alt='Img' className='bg_image1' />
        <img src='https://jackrugile.com/lab/fireworks-v2/images/mountains2.png' alt='Img' className='bg_image2' />
        <motion.div className='main-container'
          initial={{ y: 0, x: 0 }}
          animate={{ y: -80, x: 50 }}
          transition={{ delay: 13.5, duration: 1 }}
        >
          <p className='text'>2</p>
          <p className='text'>0</p>
          <p className='text'>2</p>

          <motion.p
            className='text'
            initial={{ x: 0 }}
            animate={{ y: -1000 }}
            transition={{ delay: 8.5, duration: 5 }}
          >3</motion.p>

          <motion.p className='stick'
            variants={stickVariants}
            initial="initial"
            animate={controls}
            // transition={{delay: 5}}
            style={{
              transformOrigin: 'left center', // Set transform origin for proper rotation
            }}
          ></motion.p>

          <motion.div className='relative w-200px'
            initial={{ x: 500, opacity: 1 }}
            animate={{ x: 50, opacity: 1 }}
            transition={{ duration: 5 }}

          >
            <motion.p initial={{ x: 0 }} animate={{ x: -120 }} transition={{ duration: 5, delay: 8.5 }} className='text_4'>4</motion.p>
            <motion.img src={ballon} alt='ballon' className='Image'
              variants={BallonVariants}
              initial="initial"
              animate={BallonControls}
            />
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 14.5 }}
          className='newYearText'>Happy New Year <img src='https://c.tenor.com/h_S3tK6B-h4AAAAC/tenor.gif' alt='GIF' className='GIF' />
        </motion.p>

      </div> */}

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
