import React from "react"
import Particles from "react-tsparticles"
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import "../styles/index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Seo from "../components/Seo"
library.add(fab);

export default function Home() {
  const optionsTriangle = {
    preset: "triangles",
    detectRetina: true,
    fpsLimit: 60,
    fullScreen: {
      zIndex: -1
    },
    background: {
      color: "#00474f"
    }
  };

  const particlesInit = async (engine) => {
    await loadTrianglesPreset(engine);
  };

  return (
    <div className="App">
      <Seo Sitetitle="Antonio Almena" />

      <Particles init={particlesInit} options={optionsTriangle} />

      <div className="flex-container">
        <div>
          <h1 className="flex-item">Hola</h1>

          <div className="social">
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
            <a href="https://github.com/matteobruni/tsparticles">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
