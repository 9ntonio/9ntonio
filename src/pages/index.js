import React from "react";
import ReactPlayer from "react-player";
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-gtag";
import Seo from "../components/Seo";
import logo from "../../static/logo-2.svg";
import "../styles/index.scss";

export default function Home() {
	const LINK_TARGET = "_blank";
	const LINK_REL = "noreferrer noopener";

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

	const techUrls = ["https://nextjs.org/", "https://claude.ai/", "https://developer.mozilla.org/en-US/docs/Web/API"];

	return (
		<div className="App">
			<Particles init={particlesInit} options={optionsTriangle} id="particles" />

			<Seo siteTitle="Antonio Almena" description="I'm Antonio Almena, I use both sides of my brain 🧠..." />

			<section className="mt-4">
				<div className="container">
					<div className="row align-center mb-1">
						<img src={logo} alt="Logo" className="logo" height="83px" width="auto" />

						<div className="circle-container">
							<OutboundLink href="https://www.linkedin.com/in/antonio-almena/" target={LINK_TARGET} rel={LINK_REL}>
								<FontAwesomeIcon className="linkedin" icon={faLinkedinIn} size="2x" />
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
							<OutboundLink href="https://gusto.com/" target={LINK_TARGET} rel={LINK_REL}>
								<div className="header">Gusto</div>
							</OutboundLink>

							<p className="text-wrap">
								I was hired by{" "}
								<OutboundLink href="https://www.melonheads.com/" target={LINK_TARGET} rel={LINK_REL}>
									Melon
								</OutboundLink>{" "}
								to assist{" "}
								<OutboundLink href="https://gusto.com/" target={LINK_TARGET} rel={LINK_REL}>
									Gusto
								</OutboundLink>{" "}
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
							<a href="https://store.google.com/" target={LINK_TARGET} rel={LINK_REL}>
								<StaticImage src="../../static/google.jpg" alt="Google" height="100%" className="mb-3 mb-md-0 shadow-lg" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://store.google.com" target={LINK_TARGET} rel={LINK_REL}>
								<div className="header">Google Store</div>
							</a>
							<p className="text-wrap">
								Odopod was a mid-sized digital design agency that specialized in Human Centric Design. HCD is a problem-solving technique that puts people at the center. The goal is to
								keep users’ front of mind and seek solutions that create intuitive & accessible products. As the Technical Director on this project, I worked with Google's engineers to
								meet their technical & testing requirements. The engineers & I created various proof of concepts & prototypes that were tied to a suite of unit tests. This allowed us
								to test our architecture prior to kickoff and assisted in creating a seamless delivery process.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<a href="https://www.odopod.com/case-studies/ps-vue" target={LINK_TARGET} rel={LINK_REL}>
								<StaticImage src="../../static/vue.jpg" alt="Google" height="100%" className="mb-3 mb-md-0 shadow-lg" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<OutboundLink href="https://www.odopod.com/case-studies/ps-vue" target={LINK_TARGET} rel={LINK_REL}>
								<div className="header">PlayStation Vue</div>
							</OutboundLink>
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
							Angular, React, iOS, Android, C#, Blazor, Vite, TypeScript, PostgreSQL, Mongo, Figma, Tailwind,{" "}
							{["Next.js", "Claude AI", "Web API's "].map((tech, i) => (
								<React.Fragment key={tech}>
									<OutboundLink href={techUrls[i]} target={LINK_TARGET} rel={LINK_REL}>
										{tech}
									</OutboundLink>
									{i < 2 && ", "}
								</React.Fragment>
							))}
							& a lot of{" "}
							<OutboundLink href="https://www.staygold.boo/" target={LINK_TARGET} rel={LINK_REL}>
								💖... Stay gold!
							</OutboundLink>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
