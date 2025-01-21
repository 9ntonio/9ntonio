import React, { Suspense } from "react";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-gtag";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import Seo from "../components/Seo";
import logo from "../../static/logo-2.svg";
import "../styles/index.scss";

// Dynamic imports for browser-dependent components
const ReactPlayer = React.lazy(() => import("react-player"));
const Particles = React.lazy(() => import("react-tsparticles"));

export default function Home() {
	const [isMounted, setIsMounted] = React.useState(false);
	const [isParticlesLoaded, setIsParticlesLoaded] = React.useState(false);
	const [hasError, setHasError] = React.useState(false);

	React.useEffect(() => {
		// Ensure we're in the browser environment
		if (typeof window !== "undefined") {
			setIsMounted(true);
		}

		// Cleanup function
		return () => {
			setIsMounted(false);
			setIsParticlesLoaded(false);
		};
	}, []);

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

	const particlesInit = React.useCallback(async (engine) => {
		try {
			await loadTrianglesPreset(engine);
		} catch (error) {
			console.error("Failed to initialize particles:", error);
			setHasError(true);
		}
	}, []);

	const handleParticlesLoaded = React.useCallback(() => {
		setIsParticlesLoaded(true);
		console.log("Particles loaded successfully");
	}, []);

	const techUrls = ["https://nextjs.org/", "https://claude.ai/", "https://developer.mozilla.org/en-US/docs/Web/API"];

	// SSR-safe loading state
	if (!isMounted) {
		return (
			<div className="App">
				<div
					style={{
						background: "#00474f",
						position: "fixed",
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				/>
				<Seo
					description="I'm Antonio Almena, I use both sides of my brain 🧠..."
					Sitetitle="Antonio Almena"
					meta={[
						{
							name: "keywords",
							content:
								"software development, engineering, AI, design systems, front end development, web development, design technology, design systems, design systems engineering, design systems architecture, design systems development, design systems engineering, design systems architecture, design systems development, design systems engineering, design systems architecture, design systems development",
						},
						{
							property: "og:type",
							content: "website",
						},
						{
							name: "robots",
							content: "index, follow",
						},
					]}
				/>
			</div>
		);
	}

	return (
		<div className="App">
			<Suspense
				fallback={
					<div
						style={{
							background: "#00474f",
							position: "fixed",
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
						}}
					/>
				}
			>
				{isMounted && !hasError && (
					<>
						<Particles init={particlesInit} options={optionsTriangle} id="particles" loaded={handleParticlesLoaded} />
						{!isParticlesLoaded && (
							<div
								style={{
									position: "fixed",
									top: 0,
									right: 0,
									bottom: 0,
									left: 0,
									background: "#00474f",
									zIndex: -1,
									transition: "opacity 0.3s ease-in-out",
								}}
							/>
						)}
					</>
				)}
			</Suspense>

			<Seo
				description="I'm Antonio Almena, I use both sides of my brain 🧠..."
				Sitetitle="Antonio Almena"
				meta={[
					{
						name: "keywords",
						content: "software development, engineering, AI, design systems",
					},
					{
						property: "og:type",
						content: "website",
					},
					{
						name: "robots",
						content: "index, follow",
					},
				]}
			/>

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

					<p className="text-wrap font-18 mb-2">
						I'm an engineer with a unique expertise bridging technical implementation & design systems. I leverage my computer science background in order to create AI-enhanced development
						workflows & highly performant applications. I specialize in automating design-to-development processes using cutting-edge AI tools and methodologies.
					</p>

					<div className="container">
						<div className="row">
							<div className="col-12 col-md-7">
								<p className="text-wrap font-18">
									<u>Key Technical & Design Achievements:</u>
									<ul>
										<li>Architected an AI-powered design system compiler reducing component creation time ~ 4 hours to 45 minutes</li>
										<li>Implemented an AI-powered code generation pipeline, automating 70% of documentation</li>
										<li>Built visual regression testing pipelines with AI-assisted bug detection, achieving 99% design consistency</li>
										<li>Created custom GitHub Copilot workflows increasing team productivity by 40%</li>
										<li>Automated accessibility testing using AI, catching 95% of WCAG violations pre-deployment</li>
									</ul>
								</p>
							</div>

							<div className="col-12 col-md-5">
								<p className="text-wrap font-18">
									<u>Core Competencies:</u>
									<ul>
										<li>Software Architecture & Distributed Systems Design</li>
										<li>UI/UX Design & User Research</li>
										<li>Technical Leadership & Agile Team Management</li>
										<li>Full-Stack Web Development</li>
										<li>Design Systems & Component Libraries</li>
										<li>Technical Documentation & Knowledge Management</li>
										<li>CI/CD & DevOps Practices</li>
										<li>Agile & Scrum Methodologies</li>
									</ul>
								</p>
							</div>
						</div>
					</div>
					<hr className="mt-1 mb-0" />
				</div>
			</section>

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<div className="player-wrapper shadow-lg">
								<Suspense
									fallback={
										<div
											style={{
												background: "#ccc",
												width: "100%",
												height: "100%",
											}}
										/>
									}
								>
									{isMounted && (
										<ReactPlayer
											className="react-player"
											url="https://vimeo.com/374826636"
											playing
											controls
											muted
											width="100%"
											height="100%"
											onError={(e) => console.error("Video player error:", e)}
										/>
									)}
								</Suspense>
							</div>
						</div>

						<div className="col-12 col-md-8">
							<OutboundLink href="https://gusto.com/" target={LINK_TARGET} rel={LINK_REL}>
								<div className="header">Gusto</div>
							</OutboundLink>

							<p className="text-wrap">
								I was hired by{" "}
								<OutboundLink href="https://www.deptagency.com/" target={LINK_TARGET} rel={LINK_REL}>
									DEPT®
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
								<StaticImage src="../../static/google.jpg" alt="Google" placeholder="blurred" layout="fullWidth" aspectRatio={3 / 2} className="mb-3 mb-md-0 shadow-lg" />
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://store.google.com" target={LINK_TARGET} rel={LINK_REL}>
								<div className="header">Google Store</div>
							</a>
							<p className="text-wrap">
								Odopod was a mid-sized digital design agency that specialized in Human Centric Design. HCD is a problem-solving technique that puts people at the center. The goal is to
								keep users' front of mind and seek solutions that create intuitive & accessible products. As the Technical Director on this project, I worked with Google's engineers to
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
								<StaticImage src="../../static/vue.jpg" alt="PlayStation Vue" placeholder="blurred" layout="fullWidth" aspectRatio={3 / 2} className="mb-3 mb-md-0 shadow-lg" />
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

			<section className="section-container">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4">
							<a href="https://antonio.almena.io/unknown-pleasures" target={LINK_TARGET} rel={LINK_REL}>
								<StaticImage
									src="../../static/unknown-pleasures.png"
									alt="Unknown Pleasures"
									placeholder="blurred"
									layout="fullWidth"
									aspectRatio={3 / 2}
									className="mb-3 mb-md-0 shadow-lg"
								/>
							</a>
						</div>

						<div className="col-12 col-md-8">
							<a href="https://antonio.almena.io/unknown-pleasures" target={LINK_TARGET} rel={LINK_REL}>
								<div className="header">Unknown Pleasures</div>
							</a>
							<p className="text-wrap">
								In 1979{" "}
								<a href="https://en.wikipedia.org/wiki/Factory_Records" target="_blank">
									Factory Records{" "}
								</a>
								released their 10th album{" "}
								<a href="https://en.wikipedia.org/wiki/Unknown_Pleasures" target="_blank">
									Unknown Pleasures{" "}
								</a>
								by Joy Division. The artwork is credited to both the band &{" "}
								<a href="https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)" target="_blank">
									Peter Saville{" "}
								</a>
								. The album cover uses an image of radio waves from pulsar{" "}
								<a href="https://en.wikipedia.org/wiki/CP_1919" target="_blank">
									CP 1919
								</a>
								. The background is black (instead of white) because Peter Saville said "I was convinced that it was just sexier in black". It is considered one of "the best albums of
								all time".
							</p>

							<p>
								I'm obsesed with this album, musically & artistically. So much so that for some time I've been trying to make an app that would use the album song's as the data for the
								graph. I've treid before and hit walls. Recently I've started working on it again and with some help from{" "}
								<a href="https://www.anthropic.com/" target="_blank">
									Claude
								</a>
								, a path was shown.
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
							{["Next.js", "Claude AI", "Web APIs "].map((tech, i) => (
								<React.Fragment key={tech}>
									<OutboundLink href={techUrls[i]} target={LINK_TARGET} rel={LINK_REL}>
										{tech}
									</OutboundLink>
									{i < 2 && ", "}
								</React.Fragment>
							))}
							& a lot of 💖.{" "}
							<OutboundLink href="https://en.wikipedia.org/wiki/The_Outsiders_(film)" target={LINK_TARGET} rel={LINK_REL}>
								Stay Gold
							</OutboundLink>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
