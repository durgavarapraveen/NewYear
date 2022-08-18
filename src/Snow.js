import React from "react";
import Particle from "react-tsparticles";

const Snow = ({ particlesInit, particlesLoaded }) => {
  return (
    <div>
      <Particle
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "rgb(10,10,25)",
          },
          particles: {
            number: {
              value: 100,
            },
            shape: {
              type: "star",
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "bottom",
              straight: false,
            },
          },
        }}
      />
    </div>
  );
};

export default Snow;
