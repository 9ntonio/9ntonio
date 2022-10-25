import React from "react"
import Particles from "react-tsparticles"
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import logo from "../../static/logo.svg"
import "../styles/index.scss"
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

		<section className="home-container">
			<div className="container">
				<div className="row mb-3">
					<div className="col">
						<img src={logo} alt="Logo" className="h-100" />
					</div>
				</div>

				<div className="row mb-3">
					<div className="circle-container">
						<Link to="https://github.com/9ntonio" target="_blank" rel="noopener norefer">
							<FontAwesomeIcon className="icon" icon={["fab", "github"]} size="2x" />
						</Link>
					</div>
					<div className="circle-container">
						<Link to="https://www.linkedin.com/in/antonio-almena/" target="_blank" rel="noopener norefer">
							<FontAwesomeIcon className="linkedin" icon={["fab", "linkedin-in"]} size="2x" />
						</Link>
					</div>
					<div className="circle-container">
						<Link to="https://twitter.com/9ntonio" target="_blank" rel="noopener norefer">
							<FontAwesomeIcon className="icon" icon={["fab", "twitter"]} size="2x" />
						</Link>
					</div>
				</div>

				<div className="row">
					<p className="font-18 mb-3">
						Hola 👋🏽 my name is Antonio and I live in San Francisco.
						I'm a Design Technologist who 💖's working on projects that combine Design, UX, Animation and <Link to="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noopener norefer">Web APIs</Link>.
						I'm currently part of the team over at <Link to="https://www.assurely.com/" target="_blank" rel="noopener norefer">Assurely</Link>.
					</p>
				</div>

				<hr />
			</div>
		</section>
	</div>
  )
}
