import React, { Suspense } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-gtag";
import Seo from "../components/Seo";
import ErrorBoundary from "../components/ErrorBoundary";
import ResourceHints from "../components/ResourceHints";
import FontLoadingStrategy from "../components/FontLoadingStrategy";
import LayoutStabilityMonitor from "../components/LayoutStabilityMonitor";
import AdaptiveImagePreloader from "../components/AdaptiveImagePreloader";
import ConnectionAwareImageLoader from "../components/ConnectionAwareImageLoader";
import { useParticleLoader } from "../hooks/useParticleLoader";
import { useVideoModal } from "../hooks/useVideoModal";
import { useHydrated } from "../utils/hydrationFix";
import { suppressHydrationWarnings } from "../utils/ssrSafeHelpers";
import { LINK_ATTRIBUTES, TECH_URLS, TECH_NAMES, VIDEO_CONFIG, SEO_CONFIG } from "../config/homePageConstants";
import logo from "../../static/logo-2.svg";

// Lazy load only the heaviest, non-critical components
const PreloadResources = React.lazy(() => import(/* webpackChunkName: "preload-resources" */ "../components/PreloadResources"));
const ThirdPartyScriptLoader = React.lazy(() => import(/* webpackChunkName: "third-party-scripts" */ "../components/ThirdPartyScriptLoader"));

// Lazy load heavy components only when needed - with better chunking
const Particles = React.lazy(() => import(/* webpackChunkName: "particles" */ "react-tsparticles"));
const FontAwesome = React.lazy(() => import(/* webpackChunkName: "fontawesome" */ "../components/FontAwesome"));

// Lazy load video modal only when needed
const VideoModal = React.lazy(() => import(/* webpackChunkName: "video-modal" */ "../components/VideoModal"));

export default function Home() {
	const { isMounted, isParticlesLoaded, hasError, showParticles, fadeInParticles, particlesInit, handleParticlesLoaded, getParticleOptions } = useParticleLoader();
	const { isVideoModalOpen, openVideoModal, closeVideoModal } = useVideoModal();
	const isHydrated = useHydrated();

	// Suppress hydration warnings in production
	React.useEffect(() => {
		suppressHydrationWarnings();
	}, []);

	// SSR-safe loading state - prevent hydration mismatches
	if (!isMounted || !isHydrated) {
		return (
			<div className="App">
				<div className="fixed inset-0 bg-background" />
			</div>
		);
	}

	return (
		<ErrorBoundary>
			<ResourceHints />
			<FontLoadingStrategy />
			<AdaptiveImagePreloader />
			<ConnectionAwareImageLoader />

			{process.env.NODE_ENV === "development" && <LayoutStabilityMonitor />}

			<div className="font-fredoka text-primary">
				<Suspense fallback={null}>
					<PreloadResources />
				</Suspense>

				<Suspense fallback={null}>
					<ThirdPartyScriptLoader />
				</Suspense>

				{showParticles && !hasError && (
					<Suspense fallback={<div className="fixed inset-0 bg-background" />}>
						<div className={`fixed inset-0 transition-opacity duration-1000 ease-out -z-10 ${fadeInParticles ? 'opacity-100' : 'opacity-0'}`}>
							<Particles init={particlesInit} options={getParticleOptions()} id="particles" loaded={handleParticlesLoaded} />
						</div>
						{!isParticlesLoaded && <div className="fixed inset-0 -z-10 transition-opacity duration-500 bg-background" />}
					</Suspense>
				)}

				<Seo
					description={SEO_CONFIG.DESCRIPTION}
					meta={[
						{
							name: "keywords",
							content: SEO_CONFIG.KEYWORDS,
						},
						{
							name: "robots",
							content: "index, follow",
						},
					]}
				/>

				<section className="mt-4">
					<div className="container">
						<div className="header-container flex flex-col md:flex-row md:items-center mb-0">
							<div className="logo-container mb-1">
								<img
									src={logo}
									alt="Antonio Almena - Senior Full Stack Engineer Logo"
									className="w-full h-full object-contain"
									height="83"
									width="510"
									style={{ aspectRatio: "510/83" }}
									loading="eager"
									decoding="sync"
								/>
							</div>
							<div className="social-icons-container">
								<Suspense
									fallback={
										<div className="flex flex-row">
											<div className="circle-container bg-secondary" />
											<div className="circle-container bg-secondary" />
											<div className="circle-container bg-secondary" />
										</div>
									}
								>
									<FontAwesome />
								</Suspense>
							</div>
						</div>

						<div className="font-loading">
							<p className="text-stable">
								Senior Full Stack Engineer with 12+ years of experience building high-performance web applications using React, Angular, TypeScript, and C#/Blazor. Expert in developing scalable component libraries, optimizing application performance, and implementing modern frontend architectures with a strong focus on design systems and automated testing. Proven track record of reducing development time through reusable patterns & improving application performance metrics.
							</p>

							<p className="text-stable mb-6">
								My experience allows me to hit the ground running & quickly identify opportunities for improvement, ensuring seamless integration into any team environment.
							</p>
						</div>

						<div className="mb-4">
							<div className="flex flex-wrap">
								<div className="w-full md:w-7/12">
									<div className="text-pretty text-xl">
										<div className="text-primary mb-2 font-semibold">TECHNICAL EXPERTISE:</div>
										<ul className="text-primary list-disc pl-8">
											<li>Frontend: React, Angular, TypeScript, Next.js, iOS, Android, JavaScript (ES6+) & Blazor</li>
											<li>Backend: C#, .NET, Node</li>
											<li>State Management: NgRx, Redux, Angular Signals</li>
											<li>Testing: Jest, Playwright, Jasmine</li>
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
											<li>CI/CD: GitHub Actions, Docker, AWS, NX</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div>
							<div className="flex flex-wrap">
								<div className="w-full md:w-7/12">
									<div className="text-pretty text-xl">
										<div className="text-primary mb-2 font-semibold">AWARDS:</div>
										<ul className="text-primary list-disc pl-8">
											<li>
												Communication Arts Interactive Annual Award:{" "}
												<a
													href="https://www.commarts.com/project/22631/inside-your-scion"
													target={LINK_ATTRIBUTES.TARGET}
													rel={LINK_ATTRIBUTES.REL}
													aria-label="View Excellence in Interactive Design award on Communication Arts website (opens in new tab)"
												>
													Excellence in Interactive Design
												</a>
											</li>
											<li>Webby Award Nominee: Best User Experience (Google Store)</li>
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
							<div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6">
								<div className="project-image-container">
									<button onClick={openVideoModal} aria-label="Play Gusto project video" className="relative block w-full h-full overflow-hidden rounded-lg border-none cursor-pointer group">
										<StaticImage
											src="../../static/gusto.webp"
											alt="Gusto project video thumbnail"
											placeholder="blurred"
											layout="constrained"
											width={400}
											height={267}
											formats={["avif", "webp", "auto"]}
											quality={70}
											sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
											className="transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
											loading="eager"
											fetchPriority="high"
											style={{ aspectRatio: "400/267" }}
										/>
										{/* Play Button Overlay */}
										<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
											<div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
												<div className="w-0 h-0 border-l-[16px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
											</div>
										</div>
									</button>
								</div>
							</div>

							<div className="w-full md:w-2/3">
								<OutboundLink href="https://gusto.com/" target={LINK_ATTRIBUTES.TARGET} rel={LINK_ATTRIBUTES.REL} aria-label="Visit Gusto website (opens in new tab)">
									<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2">Gusto</div>
								</OutboundLink>

								<p className="text-stable">
									I was hired by{" "}
									<OutboundLink
										href="https://www.deptagency.com/"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Visit DEPT Agency website (opens in new tab)"
									>
										DEPT®
									</OutboundLink>{" "}
									to assist{" "}
									<OutboundLink
										href="https://gusto.com/"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Visit Gusto website (opens in new tab)"
									>
										Gusto
									</OutboundLink>{" "}
									with their brand refresh. Gusto is a large SaaS startup whose focus is in providing HR & accounting services to small business owners. As lead front end engineer, I managed a team of 6 software & QA engineers. While working out of the Gusto offices, I collaborated with Brand Studio, Marketing, Product & Growth teams. Together we were able to deliver over +100 pages on time with what was noted to be the "smoothest brand launch" anyone had seen 🎉.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container mb-12">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6">
								<div className="project-image-container">
									<a
										href="https://store.google.com/"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										aria-label="Visit Google Store website (opens in new tab)"
										className="group block w-full h-full"
									>
										<StaticImage
											src="../../static/google.webp"
											alt="Google Store project showcase"
											placeholder="blurred"
											layout="constrained"
											width={400}
											height={267}
											formats={["avif", "webp", "auto"]}
											quality={65}
											sizes="(max-width: 640px) 95vw, (max-width: 768px) 48vw, (max-width: 1024px) 32vw, 380px"
											className="transition-transform duration-300 group-hover:scale-105 rounded-lg w-full h-full object-cover"
											loading="lazy"
											style={{ aspectRatio: "400/267" }}
										/>
									</a>
								</div>
							</div>

							<div className="w-full md:w-2/3">
								<a href="https://store.google.com" target={LINK_ATTRIBUTES.TARGET} rel={LINK_ATTRIBUTES.REL} aria-label="Visit Google Store website (opens in new tab)">
									<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2">Google Store</div>
								</a>
								<p className="text-stable">
									Odopod was a mid-sized digital design agency that specialized in Human Centric Design. HCD is a problem-solving technique that puts people at the center. The goal is to keep users' front of mind & seek solutions that create intuitive & accessible products. As the Technical Director on this project, I worked with Google's engineers to meet their technical & testing requirements. The engineers & I created various proof of concepts along with prototypes that were tied to a suite of unit tests. This allowed us to test our architecture prior to kickoff and assisted in creating a seamless delivery process & streamlined the development process.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container mb-12">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6">
								<div className="project-image-container">
									<a
										href="https://www.odopod.com/case-studies/ps-vue"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										aria-label="View PlayStation Vue case study on Odopod website (opens in new tab)"
										className="group block w-full h-full"
									>
										<StaticImage
											src="../../static/vue.webp"
											alt="PlayStation Vue streaming service application"
											placeholder="blurred"
											layout="constrained"
											width={400}
											height={267}
											formats={["webp", "auto"]}
											quality={60}
											sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 350px"
											className="transition-transform duration-300 group-hover:scale-105 rounded-lg w-full h-full object-cover"
											loading="lazy"
											style={{ aspectRatio: "400/267" }}
										/>
									</a>
								</div>
							</div>

							<div className="w-full md:w-2/3">
								<OutboundLink
									href="https://www.odopod.com/case-studies/ps-vue"
									target={LINK_ATTRIBUTES.TARGET}
									rel={LINK_ATTRIBUTES.REL}
									aria-label="View PlayStation Vue case study on Odopod website (opens in new tab)"
								>
									<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2">PlayStation Vue</div>
								</OutboundLink>
								<p className="text-stable">
									The Odopod team & I built the iOS application for Sony's streaming service Vue. The application included live TV, DVR, and VOD features via a 3rd party content delivery service. As the Technical Director, I worked with Sony on the iOS & Chromecast builds while also managing both the internal & external engineering teams. I also assisted various design & engineering vendors by on-boarding them into Vue's vast ecosystem.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container mb-12">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/3 md:pr-6">
								<div className="project-image-container">
									<a
										href="/unknown-pleasures"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										aria-label="View Unknown Pleasures interactive visualization project (opens in new tab)"
										className="group block w-full h-full"
									>
										<StaticImage
											src="../../static/unknown-pleasures.webp"
											alt="Unknown Pleasures Joy Division album cover visualization"
											placeholder="blurred"
											layout="constrained"
											width={400}
											height={267}
											formats={["webp", "auto"]}
											quality={60}
											sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 350px"
											className="transition-transform duration-300 group-hover:scale-105 rounded-lg w-full h-full object-cover"
											loading="lazy"
											style={{ aspectRatio: "400/267" }}
										/>
									</a>
								</div>
							</div>

							<div className="w-full md:w-2/3">
								<a href="/unknown-pleasures" target={LINK_ATTRIBUTES.TARGET} rel={LINK_ATTRIBUTES.REL} aria-label="View Unknown Pleasures interactive visualization project (opens in new tab)">
									<div className="text-primary text-3xl font-bold leading-tight hover:text-highlight mb-2 mt-4 md:mt-0">Unknown Pleasures</div>
								</a>
								<p className="text-stable">
									In 1979{" "}
									<a
										href="https://en.wikipedia.org/wiki/Factory_Records"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Learn about Factory Records on Wikipedia (opens in new tab)"
									>
										Factory Records
									</a>{" "}
									released their 10th album{" "}
									<a
										href="https://en.wikipedia.org/wiki/Unknown_Pleasures"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Learn about Unknown Pleasures album on Wikipedia (opens in new tab)"
									>
										Unknown Pleasures
									</a>{" "}
									by Joy Division. The artwork is credited to both the band &{" "}
									<a
										href="https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Learn about Peter Saville graphic designer on Wikipedia (opens in new tab)"
									>
										Peter Saville.
									</a>{" "}
									The album cover uses an image of radio waves from pulsar{" "}
									<a
										href="https://en.wikipedia.org/wiki/CP_1919"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Learn about CP 1919 pulsar on Wikipedia (opens in new tab)"
									>
										CP 1919
									</a>
									. The background is black (instead of white) because Peter Saville said "I was convinced that it was just sexier in black". It is considered one of "the best albums of all time".
								</p>

								<p className="text-stable">
									I'm obsessed with this album. So much so that for some time I've been trying to make an application that would use the album song's as data for the waveform. I've tried before and hit walls. Recently I've started working on it again & with some help from{" "}
									<a
										href="https://www.anthropic.com/"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Visit Anthropic Claude AI website (opens in new tab)"
									>
										Claude
									</a>
									, a path was made.{" "}
									<a
										href="https://medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf"
										target={LINK_ATTRIBUTES.TARGET}
										rel={LINK_ATTRIBUTES.REL}
										className="text-primary hover:text-highlight"
										aria-label="Read blog post about AI creativity and Unknown Pleasures on Medium (opens in new tab)"
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

							<p className="text-stable">
								Angular, React, ReactNative, iOS, Android, C#, Blazor, Vite, TypeScript, PostgreSQL, Mongo, Figma, NX, Tailwind, Kiro,{" "}
								{TECH_NAMES.map((tech, i) => (
									<React.Fragment key={tech}>
										<OutboundLink
											href={TECH_URLS[i]}
											target={LINK_ATTRIBUTES.TARGET}
											rel={LINK_ATTRIBUTES.REL}
											className="text-primary hover:text-highlight"
											aria-label={`Learn more about ${tech} (opens in new tab)`}
										>
											{tech}
										</OutboundLink>
										{i < 2 && ", "}
									</React.Fragment>
								))}
								& a lot of 💖...{' '}
								<OutboundLink
									href="https://en.wikipedia.org/wiki/The_Outsiders_(film)"
									target={LINK_ATTRIBUTES.TARGET}
									rel={LINK_ATTRIBUTES.REL}
									className="text-primary hover:text-highlight"
									aria-label="Learn about The Outsiders film on Wikipedia (opens in new tab)"
								>
									Stay Gold!
								</OutboundLink>
							</p>
						</div>
					</div>
				</section>

				{isVideoModalOpen && (
					<Suspense
						fallback={
							<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
								<div className="text-primary">Loading...</div>
							</div>
						}
					>
						<VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} videoUrl={VIDEO_CONFIG.GUSTO_VIDEO_URL} title={VIDEO_CONFIG.GUSTO_VIDEO_TITLE} />
					</Suspense>
				)}
			</div>
		</ErrorBoundary>
	);
}
