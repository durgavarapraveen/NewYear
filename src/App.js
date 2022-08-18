import React from "react";
import { loadFull } from "tsparticles";
import Bubbles from "./Bubbles";
import Starry from "./Starry";
import Wheel from "./Wheel";
import Fireworks from "./Fireworks";
import Example from "./Example";
import Snow from "./Snow";


const App = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <Snow
        particlesLoaded={particlesLoaded}
        particlesInit={particlesInit}
      />
    </div>
  );
};

export default App;
