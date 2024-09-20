import React from "react";
import ReactPlayer from "react-player";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import Seo from "../components/Seo";
import logo from "../../static/logo-2.svg";
import "../styles/index.scss";

library.add(fab);

export default function Home() {
	const optionsTriangle = {
		preset: "triangles",
		particles: {
			color: {
				value: "#fff",
			},
			line_linked: {
				color: "#006d75",
				distance: 175,
				enable: true,
				opacity: 1,
				width: 1,
			},
		},
		detectRetina: true,
		fpsLimit: 60,
		fullScreen: {
			zIndex: -1,
		},
		background: {
			color: "#00474f",
		},
	};

	const particlesInit = async (engine) => {
		await loadTrianglesPreset(engine);
	};

	return (
		<div className="App">
			{/* !! Particles Init !! */}
			<Particles init={particlesInit} options={optionsTriangle} id="particles" />

			<Seo Sitetitle="Antonio Almena" description="I'm Antonio Almena, I use both sides of my brain 🧠..." />

			<section className="mt-4">
				<div className="container">
					<div className="row align-center mb-1">
						<img src={logo} alt="Logo" className="logo" height="83px" width="auto" />

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
						<p className="text-wrap font-18 mb-3">
							I 💘 the space where design & technology overlap. My background is in both design & engineering. I enjoy creating design systems based in human-centric design principles.
							My core strengths are in: Coding, Application Architecture, UI/UX, Prototyping, Technical Writing, Animation and I’m also able to code in multiple languages. My leadership
							skills stem from my team management and client relations experience. I’ve been lucky to work across various industries: FinTech, Automotive, Gaming and Entertainment to
							name a few.
						</p>
					</div>

					<hr className="mt-1 mb-0" />
				</div>
			</section>

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<div className="player-wrapper shadow-lg">
								<ReactPlayer className="react-player" url="https://vimeo.com/374826636" playing controls muted width="100%" height="100%" />
							</div>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://gusto.com/" target="_blank" rel="noreferrer noopener">
								<div className="header">Gusto</div>
							</a>

							<p className="text-wrap">
								I was hired by{" "}
								<Link to="https://www.melonheads.com/" target="_blank" rel="noreferrer noopener">
									Melon
								</Link>{" "}
								to assist{" "}
								<Link to="https://gusto.com/" target="_blank" rel="noreferrer noopener">
									Gusto
								</Link>{" "}
								with their brand refresh. Gusto is large SaaS startup whose focus is in providing HR and accounting services to small business owners. As lead engineer, I managed a
								team of 6 software & QA engineers. While working out of the Gusto offices, I collaborated with Brand Studio, Marketing & Product teams. Together we were able to deliver
								on time with what was noted to be the "smoothest brand launch" anyone had seen 🎉.
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
								<StaticImage src="../../static/google.jpg" alt="Google" height="100%" className="mb-3 mb-md-0 shadow-lg" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://store.google.com" target="_blank" rel="noreferrer noopener">
								<div className="header">Google Store</div>
							</a>
							<p className="text-wrap">
								Odopod was a mid-sized digital design agency that specialized in Human Centric Design. HCD is a problem-solving technique that puts people at the center. The goal is to
								keep users’ front of mind and seek solutions that create intuitive & accessible products. As the Technical Director on this project, I worked with Google's engineers to
								meet their technical & testing requirements. The engineers & I created various proof of concepts & prototypes that were tied to a suite of unit tests. This allowed us
								to test our architecture prior to kickoff and assisted in creating a seemless delivery process.
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
								<StaticImage src="../../static/vue.jpg" alt="Google" height="100%" className="mb-3 mb-md-0 shadow-lg" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://www.odopod.com/case-studies/ps-vue" target="_blank" rel="noreferrer noopener">
								<div className="header">Playstion Vue</div>
							</a>
							<p className="text-wrap">
								The Odopod team and I built the iOS application for Sony's streaming service Vue. The application included live TV, DVR, and VOD features via a 3rd party content
								delivery service. As the Technical Director, I worked with Sony on the iOS and Chromecast builds while also managing both internal & external engineering teams. I also
								assisted various design & engineering vendors by on-boarding them into the product's vast ecosystem.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-container-last">
				<div className="container">
					<div className="row">
						<div className="header">What technologies have I been working with?</div>
						<p className="font-20 text-wrap">
							React, React Native, iOS, Android, C#, Blazor, Vite, TypeScript, Prisma, PostgrSQL, GraphQL, Mongo, Figma,{" "}
							<a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
								Next.js
							</a>
							,{" "}
							<a href="https://claude.ai/" target="_blank" rel="noreferrer noopener">
								Intelligence Artificielle
							</a>
							,{" "}
							<a href="https://www.cursor.com/" target="_blank" rel="noreferrer noopener">
								Cursor
							</a>
							, and a lot of{" "}
							<a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noreferrer noopener">
								Web API's
							</a>
							.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
