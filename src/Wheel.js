import React from "react";
import Particles from "react-tsparticles";

const Wheel = ({ particlesInit, particlesLoaded }) => {
  return (
    <div>
      <Particles
        id="tsparticles"
        className="wheel"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
            zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
          },
          interactivity: {
            events: {
              onClick: {
                enable: true, // enables the click event
                mode: "push", // adds the particles on click
              },
              onHover: {
                enable: true, // enables the hover event
                mode: "repulse", // make the particles run away from the cursor
              },
            },
            modes: {
              push: {
                quantity: 10, // number of particles to add on click
              },
              repulse: {
                distance: 100, // distance of the particles from the cursor
              },
            },
          },
          particles: {
            links: {
              enable: true, // enabling this will make particles linked together
              distance: 90, // maximum distance for linking the particles
            },
            shape: {
              type: "circle",
            },
            move: {
              enable: true, // enabling this will make particles move in the canvas
              speed: {
                value: 30,
              },
            },
            opacity: {
              value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
            },
            size: {
              value: 5, // let's randomize the particles size a bit
            },
          },
        }}
      />
    </div>
  );
};

export default Wheel;
