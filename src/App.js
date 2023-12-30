import React, { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Bubbles from "./Bubbles";
import Starry from "./Starry";
import Wheel from "./Wheel";
import Fireworks from "./Fireworks";
import Example from "./Example";
import Snow from "./Snow";
import NewYear from "./Components/NewYear";


const App = () => {

  const [firework, setFireWork] = useState(false)

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

  useEffect(() => {
    setTimeout(() => {
      setFireWork(true);
    }, 14500)
  })

  return (
    <div className="App">
      <NewYear />
      {
        firework && <Fireworks
          particlesLoaded={particlesLoaded}
          particlesInit={particlesInit}
        />
      }
      {/* <Starry
        particlesInit={particlesInit}
        particlesLoaded={particlesLoaded}
      /> */}
    </div>
  );
};

export default App;
