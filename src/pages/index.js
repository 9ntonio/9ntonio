import React, { Suspense } from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-gtag";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import Seo from "../components/Seo";
import logo from "../../static/logo-2.svg";

// Dynamic imports for browser-dependent components
const ReactPlayer = React.lazy(() => import("react-player"));
const Particles = React.lazy(() => import("react-tsparticles"));

export default function Home() {
	const [isMounted, setIsMounted] = React.useState(false);
	const [isParticlesLoaded, setIsParticlesLoaded] = React.useState(false);
	const [hasError, setHasError] = React.useState(false);
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		// Ensure we're in the browser environment
		if (typeof window !== "undefined") {
			setIsMounted(true);
			// Check if device is mobile (using 768px as breakpoint)
			setIsMobile(window.innerWidth < 768);
		}

		// Cleanup function
		return () => {
			setIsMounted(false);
			setIsParticlesLoaded(false);
		};
	}, []);

	const LINK_TARGET = "_blank";
	const LINK_REL = "noreferrer";

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
				<div className="fixed inset-0 bg-background" />
				<Seo
					description="Senior Full Stack Engineer with 8+ years of experience building high-performance web applications using React, Angular, C# & Blazor. Specialized in developing scalable component libraries, optimizing application performance, and implementing modern frontend architectures. I have a strong background in design systems and automated testing."
					Sitetitle="Antonio Almena"
					meta={[
						{
							name: "keywords",
							content:
								"software development, engineering, AI, design systems, front end development, web development, design technology, design systems engineering, design systems architecture",
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
		<div className="font-fredoka text-textColor">
			<Suspense fallback={<div className="fixed inset-0 bg-background" />}>
				{isMounted && !hasError && !isMobile && (
					<>
						<Particles init={particlesInit} options={optionsTriangle} id="particles" loaded={handleParticlesLoaded} />
						{!isParticlesLoaded && <div className="fixed inset-0 bg-background -z-10 transition-opacity duration-500" />}
					</>
				)}
			</Suspense>

			<Seo
				description="Senior Full Stack Engineer with 8+ years of experience building high-performance web applications using React, Angular, C# & Blazor. Specialized in developing scalable component libraries, optimizing application performance, and implementing modern frontend architectures. I have a strong background in design systems and automated testing."
				Sitetitle="Antonio Almena"
				meta={[
					{
						name: "keywords",
						content:
							"software development, engineering, AI, design systems, front end development, web development, design technology, design systems engineering, design systems architecture",
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
					<div className="flex flex-col md:flex-row md:items-center mb-4">
						<img src={logo} alt="Logo" className="w-full sm:w-[510px] mb-1" height="83px" width="auto" />
						<div className="flex flex-row">
							<div className="circle-container">
								<OutboundLink href="https://www.linkedin.com/in/antonio-almena/" target={LINK_TARGET} rel={LINK_REL}>
									<FontAwesomeIcon className="linkedin" icon={faLinkedinIn} size="2x" />
								</OutboundLink>
							</div>

							<div className="circle-container">
								<OutboundLink href="https://www.github.com/9ntonio" target={LINK_TARGET} rel={LINK_REL}>
									<FontAwesomeIcon className="github" icon={faGithub} size="2x" />
								</OutboundLink>
							</div>

							<div className="circle-container">
								<OutboundLink href="https://www.medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf" target={LINK_TARGET} rel={LINK_REL}>
									<FontAwesomeIcon className="blog" icon={faBlog} size="2x" />
								</OutboundLink>
							</div>
						</div>
					</div>

					<p className="text-xl mb-4">
						Senior full stack engineer with 8+ years of experience building high-performance web applications using React, Angular, C# & Blazor. Specializing in developing scalable
						component libraries, optimizing application performance & implementing modern frontend architectures. I have a strong background in design systems and automated testing.
					</p>

					<p className="text-xl mb-6">
						My experience allows me to hit the ground running & quickly identify opportunities for improvement, ensuring seamless integration into any team environment.
					</p>

					<div>
						<div className="flex flex-wrap">
							<div className="w-full md:w-7/12">
								<div className="text-pretty text-xl">
									<div className="text-primary mb-2 font-semibold">TECHNICAL EXPERTISE:</div>
									<ul className="text-primary list-disc pl-8">
										<li>Frontend: React 18, Angular 17, TypeScript 5.x, RxJS, JavaScript (ES6+)</li>
										<li>Backend: C# & Blazor</li>
										<li>State Management: NgRx, Redux, Angular Signals</li>
										<li>Testing: Jest, Playwright, Jasmine, Karma</li>
										<li>Build Tools: Vite, Esbuild, Webpack, Angular CLI, NX</li>
										<li>Automated component accessibility testing using AI</li>
										<li>Architected AI-powered design system compiler reducing creation time by ~50%</li>
									</ul>
								</div>
							</div>

							<div className="w-full md:w-5/12">
								<div className="text-pretty text-xl">
									<div className="hidden md:block">&nbsp;</div>
									<ul className="text-primary list-disc pl-8">
										<li>Performance: SSR, Code Splitting, Bundle Optimization</li>
										<li>CSS: SCSS, CSS-in-JS, Tailwind, Angular Material</li>
										<li>Design Systems: Storybook, Style Dictionary</li>
										<li>Version Control: Git, GitHub</li>
										<li>CI/CD: Jenkins, GitHub Actions</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<hr className="my-8 border-primary" />
				</div>
			</section>

			<section>
				<div className="container mb-12">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/3 mb-4 md:mb-0">
							<div className="player-wrapper">
								<Suspense fallback={<div className="w-full h-full bg-gray-300" />}>
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

						<div className="w-full md:w-2/3">
							<OutboundLink href="https://gusto.com/" target={LINK_TARGET} rel={LINK_REL}>
								<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2">Gusto</div>
							</OutboundLink>

							<p className="text-xl">
								I was hired by{" "}
								<OutboundLink href="https://www.deptagency.com/" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									DEPT®
								</OutboundLink>{" "}
								to assist{" "}
								<OutboundLink href="https://gusto.com/" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									Gusto
								</OutboundLink>{" "}
								with their brand refresh. Gusto is a large SaaS startup whose focus is in providing HR and accounting services to small business owners. As lead engineer, I managed a
								team of 6 software & QA engineers. While working out of the Gusto offices, I collaborated with Brand Studio, Marketing & Product teams. Together we were able to deliver
								over +100 pages on time with what was noted to be the "smoothest brand launch" anyone had seen 🎉.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mb-12">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/3 mb-4 md:mb-0">
							<a href="https://store.google.com/" target={LINK_TARGET} rel={LINK_REL}>
								<StaticImage src="../../static/google.jpg" alt="Google" placeholder="blurred" layout="fullWidth" aspectRatio={3 / 2} className="mr-6" />
							</a>
						</div>

						<div className="w-full md:w-2/3">
							<a href="https://store.google.com" target={LINK_TARGET} rel={LINK_REL}>
								<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2">Google Store</div>
							</a>
							<p className="text-xl">
								Odopod was a mid-sized digital design agency that specialized in Human Centric Design. HCD is a problem-solving technique that puts people at the center. The goal is to
								keep users' front of mind and seek solutions that create intuitive & accessible products. As the Technical Director on this project, I worked with Google's engineers to
								meet their technical & testing requirements. The engineers & I created various proof of concepts & prototypes that were tied to a suite of unit tests. This allowed us
								to test our architecture prior to kickoff and assisted in creating a seamless delivery process.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mb-12">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/3 mb-4 md:mb-0">
							<a href="https://www.odopod.com/case-studies/ps-vue" target={LINK_TARGET} rel={LINK_REL}>
								<StaticImage src="../../static/vue.jpg" alt="PlayStation Vue" placeholder="blurred" layout="fullWidth" aspectRatio={3 / 2} className="mr-6" />
							</a>
						</div>

						<div className="w-full md:w-2/3">
							<OutboundLink href="https://www.odopod.com/case-studies/ps-vue" target={LINK_TARGET} rel={LINK_REL}>
								<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2">PlayStation Vue</div>
							</OutboundLink>
							<p className="text-xl">
								The Odopod team and I built the iOS application for Sony's streaming service Vue. The application included live TV, DVR, and VOD features via a 3rd party content
								delivery service. As the Technical Director, I worked with Sony on the iOS and Chromecast builds while also managing both internal & external engineering teams. I also
								assisted various design & engineering vendors by on-boarding them into the product's vast ecosystem.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mb-12">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/3">
							<a href="/unknown-pleasures" target={LINK_TARGET} rel={LINK_REL}>
								<StaticImage src="../../static/unknown-pleasures.png" alt="Unknown Pleasures" placeholder="blurred" layout="fullWidth" aspectRatio={3 / 2} className="mr-6" />
							</a>
						</div>

						<div className="w-full md:w-2/3">
							<a href="/unknown-pleasures" target={LINK_TARGET} rel={LINK_REL}>
								<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2 mt-4 md:mt-0">Unknown Pleasures</div>
							</a>
							<p className="text-xl">
								In 1979{" "}
								<a href="https://en.wikipedia.org/wiki/Factory_Records" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									Factory Records
								</a>{" "}
								released their 10th album{" "}
								<a href="https://en.wikipedia.org/wiki/Unknown_Pleasures" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									Unknown Pleasures
								</a>{" "}
								by Joy Division. The artwork is credited to both the band &{" "}
								<a href="https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									Peter Saville.
								</a>{" "}
								The album cover uses an image of radio waves from pulsar{" "}
								<a href="https://en.wikipedia.org/wiki/CP_1919" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									CP 1919
								</a>
								. The background is black (instead of white) because Peter Saville said "I was convinced that it was just sexier in black". It is considered one of "the best albums of
								all time".
							</p>

							<p className="text-xl">
								I'm obsessed with this album. So much so that for some time I've been trying to make an app that would use the album song's as the data for the waveform. I've tried
								before and hit walls. Recently I've started working on it again and with some help from{" "}
								<a href="https://www.anthropic.com/" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
									Claude
								</a>
								, a path was made.{" "}
								<a
									href="https://medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf"
									target={LINK_TARGET}
									rel={LINK_REL}
									className="text-primary hover:text-highlight"
								>
									Read my post describing the process
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container mb-4">
					<div className="flex flex-wrap">
						<div className="text-primary text-3xl font-bold leading-tight mb-2">What technologies have I been working with?</div>

						<p className="text-xl">
							Angular, React, ReactNative, iOS, Android, C#, Blazor, Vite, TypeScript, PostgreSQL, Mongo, Figma, NX, Tailwind,{" "}
							{["Next.js", "Claude AI", "Web APIs "].map((tech, i) => (
								<React.Fragment key={tech}>
									<OutboundLink href={techUrls[i]} target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
										{tech}
									</OutboundLink>
									{i < 2 && ", "}
								</React.Fragment>
							))}
							& a lot of 💖&nbsp;
							<OutboundLink href="https://en.wikipedia.org/wiki/The_Outsiders_(film)" target={LINK_TARGET} rel={LINK_REL} className="text-primary hover:text-highlight">
								Stay Gold
							</OutboundLink>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
