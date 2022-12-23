import React from "react"
import ReactPlayer from 'react-player'
import Particles from "react-tsparticles"
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Seo from "../components/Seo"
import logo2 from "../../static/logo-2.svg"
import logo3 from "../../static/logo-3.svg"
import "../styles/index.scss"
library.add(fab);

export default function Home() {
	const logoArray = [logo2, logo3];
	const randomLogoID = Math.floor(Math.random() * logoArray.length);
	const logo = logoArray[randomLogoID];

	const optionsTriangle = {
		preset: "triangles",
		particles: {
			color: {
				value: "#fff"
			},
			line_linked: {
				color: "#006d75",
				distance: 175,
				enable: true,
				opacity: 1,
				width: 1
			},
		},
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
			<Particles init={particlesInit} options={optionsTriangle} id="particles" />

			<section className="mt-3">
				<div className="container">
					<div className="row mb-3">
						<div className="col">
							<img src={logo} alt="Logo" className="logo" />
						</div>
					</div>

					<div className="row mb-3">
						<div className="circle-container">
							<OutboundLink href="https://github.com/9ntonio" target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon className="icon" icon={["fab", "github"]} size="2x" />
							</OutboundLink>
						</div>

						<div className="circle-container">
							<OutboundLink href="https://www.linkedin.com/in/antonio-almena/" target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon className="linkedin" icon={["fab", "linkedin-in"]} size="2x" />
							</OutboundLink>
						</div>
					</div>

					<div className="row">
						<p className="font-18 mb-3">
							I'm a Design Technologist who 💖's working on projects that combine Design, UX, Animation and <Link to="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noreferrer noopener">Web APIs</Link>.
							I'm currently part of the team over at <Link to="https://www.assurely.com/" target="_blank" rel="noreferrer noopener">Assurely</Link> and I live in <Link to="https://www.thrillist.com/events/san-francisco/things-to-do-in-san-francisco-sf-this-weekend" target="_blank" rel="noreferrer noopener">San Francisco</Link>.
						</p>
					</div>

					<hr className="mt-4 mb-0" />
				</div>
			</section>

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6">
							<div className="player-wrapper">
								<ReactPlayer
									className="react-player"
									url='https://vimeo.com/374826636'
									playing
									controls
									muted
									width="100%"
									height="100%"
								/>
							</div>
						</div>

						<div className="col-12 col-md-6">
							<a href="https://gusto.com/wallet" target="_blank" rel="noreferrer noopener">
								<div className="header">
									Gusto
								</div>
							</a>

							<p>
								I was hired by <Link to="https://www.melonheads.com/" target="_blank" rel="noreferrer noopener">Melon</Link> to assist <Link to="https://gusto.com/" target="_blank" rel="noreferrer noopener">Gusto</Link> with their brand refresh.
								As the lead developer, I worked with Brand Studio, Marketing and Growth teams to get over 100 pages updated.
								The team and I were able to deliver on time with what was noted to be the "smoothest brand launch" anyone had seen 🎉.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<a href="https://store.google.com/" target="_blank" rel="noreferrer noopener">
								<StaticImage src="../../static/google.jpg" alt="Google" height="100%" className="mb-3 mb-md-0" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://store.google.com" target="_blank" rel="noreferrer noopener">
								<div className="header">
									Google Store
								</div>
							</a>

							<p>
								As the Technical Director on the project I worked with Google's engineers in order to adhere to their technical requirements and testing guidelines.
								The engineers and I created various proof of concepts that were tied to a suite of tests. This allowed us to test our architecture prior to kickoff.
								In the end, the rollout was flawless.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<a href="https://www.odopod.com/case-studies/ps-vue" target="_blank" rel="noreferrer noopener">
								<StaticImage src="../../static/vue.jpg" alt="Google" height="100%" className="mb-3 mb-md-0" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://www.odopod.com/case-studies/ps-vue" target="_blank" rel="noreferrer noopener">
								<div className="header">
									Playstion Vue
								</div>
							</a>

							<p>
								The Odopod team and I created the iOS companion app (as well as the Chromecast app) for Sony's IPTV service.
								Vue included live TV, DVR, and VOD features using integration with a third party content delivery service.
								As the Technical Director, I worked with Sony PlayStation on outlining (and building) the applications (iOS and Chromecast), as well as the security architecture needed to adhere to their guidelines.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-container-last">
				<div className="container">
					<div className="row">
						<div className="header">
							What technologies have I been working with?
						</div>

						<p className="font-20">
							Blazor, C#, React, NextJS, Gatsby, TypeScript, Prisma, PostgrSQL, GraphQL ,HAML, SCSS, Bootstrap, Figma and a lot of Web API's.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
