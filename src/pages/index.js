import React from "react"
import ReactPlayer from 'react-player'
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
						<Link to="https://github.com/9ntonio" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon className="icon" icon={["fab", "github"]} size="2x" />
						</Link>
					</div>
					<div className="circle-container">
						<Link to="https://www.linkedin.com/in/antonio-almena/" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon className="linkedin" icon={["fab", "linkedin-in"]} size="2x" />
						</Link>
					</div>
					<div className="circle-container">
						<Link to="https://twitter.com/9ntonio" target="_blank" rel="noreferrer noopener">
							<FontAwesomeIcon className="icon" icon={["fab", "twitter"]} size="2x" />
						</Link>
					</div>
				</div>

				<div className="row">
					<p className="font-18 mb-3">
						Hello 👋🏽 my name is Antonio and I live in San Francisco.
						I'm a Design Technologist who 💖's working on projects that combine Design, UX, Animation and <Link to="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noreferrer noopener">Web API</Link>.
						I'm currently part of the team over at <Link to="https://www.assurely.com/" target="_blank" rel="noreferrer noopener">Assurely</Link>.
					</p>
				</div>

				<hr />
			</div>
		</section>

    	<section>
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="player-wrapper">
							<ReactPlayer className="react-player" url='https://vimeo.com/374826636' playing controls muted width="100%" height="100%" />
						</div>
					</div>

					<div className="col-sm-12 col-md-6">
						<div className="header">
							Project Title
						</div>

						<p>
							Do laborum aliqua nulla labore sed commodo esse qui eiusmod reprehenderit quis. Proident voluptate enim consequat occaecat mollit sint do sit pariatur aliquip ea nostrud eu ullamco sunt commodo. Nulla anim amet quis velit incididunt ut elit velit irure veniam.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
  )
}
