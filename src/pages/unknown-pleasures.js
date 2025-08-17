import React, { useRef, useState } from "react";
import Seo from "../components/Seo";
import FontLoadingOptimizer from "../components/FontLoadingOptimizer";

const UnknownPleasuresPage = () => {
	// Create a reference to the iframe element
	const iframeRef = useRef(null);

	// Simple state to track errors
	const [hasError, setHasError] = useState(false);

	// Simple error handler
	const handleError = () => {
		setHasError(true);
	};

	return (
		<>
			<FontLoadingOptimizer />
			<Seo
				Sitetitle="Unknown Pleasures"
				description="Unknown Pleasures visualization experiment inspired by Joy Division's Unknown Pleasures album art"
				meta={[
					{
						name: "keywords",
						content: "unknown pleasures,visualization,experimental,music,data,javascript,joy division,antonio almena, 9ntonio",
					},
					{
						property: "og:type",
						content: "website",
					},
					{
						name: "robots",
						content: "index,follow",
					},
				]}
			/>

			{/* Container with minimal styling to avoid interference */}
			<div
				style={{
					margin: 0,
					padding: 0,
					width: "100vw",
					height: "100vh",
					overflow: "hidden",
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "#000", // Black background as fallback
				}}
			>
				{/* Show error message if iframe failed to load */}
				{hasError && (
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							color: "white",
							textAlign: "center",
							maxWidth: "80%",
							fontFamily: "system-ui, -apple-system, sans-serif",
							zIndex: 10,
						}}
					>
						<h2>Unable to load Unknown Pleasures</h2>
						<p>Please try refreshing the page or visit again later.</p>
						<p>
							<a href="/" style={{ color: "white", textDecoration: "underline" }}>
								Return to homepage
							</a>
						</p>
					</div>
				)}

				{/* The iframe that contains the Unknown Pleasures experiment */}
				<iframe
					ref={iframeRef}
					src="/unknown-pleasures/index.html"
					style={{
						width: "100%",
						height: "100%",
						border: "none",
						margin: 0,
						padding: 0,
						display: "block",
						position: "absolute",
						top: 0,
						left: 0,
					}}
					title="Unknown Pleasures"
					allow="autoplay; microphone; camera; midi; geolocation; accelerometer; gyroscope; payment; magnetometer; encrypted-media; usb"
					loading="eager"
					onError={handleError}
					sandbox="allow-scripts allow-forms allow-popups allow-downloads allow-modals"
				/>
			</div>
		</>
	);
};

export default UnknownPleasuresPage;
