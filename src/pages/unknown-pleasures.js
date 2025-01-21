import React from "react";
import Seo from "../components/Seo";

const UnknownPleasuresPage = () => {
	const [mounted, setMounted] = React.useState(false);
	const [error, setError] = React.useState(null);
	const iframeRef = React.useRef(null);

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);

			// Debug: Check if the file exists
			fetch("/unknown-pleasures/index.html")
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					console.log("Unknown Pleasures index.html found");
				})
				.catch((err) => {
					console.error("Failed to fetch Unknown Pleasures:", err);
					setError(err.message);
				});
		}
	}, []);

	// Handle iframe load errors
	const handleIframeError = () => {
		console.error("Failed to load iframe content");
		setError("Failed to load content");
	};

	const pageMeta = [
		{
			name: "keywords",
			content: "unknown pleasures,visualization,experimental",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			name: "robots",
			content: "noindex",
		},
	];

	if (!mounted) {
		return (
			<>
				<Seo Sitetitle="Unknown Pleasures" description="Unknown Pleasures visualization experiment" meta={pageMeta} />
				<div
					style={{
						width: "100vw",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "#000",
						color: "#fff",
					}}
				>
					Loading...
				</div>
			</>
		);
	}

	if (error) {
		return (
			<>
				<Seo Sitetitle="Unknown Pleasures - Error" description="Error loading Unknown Pleasures" meta={pageMeta} />
				<div
					style={{
						width: "100vw",
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						background: "#000",
						color: "#fff",
						padding: "20px",
						textAlign: "center",
					}}
				>
					<h1>Error Loading Content</h1>
					<p>{error}</p>
					<p>Path: /unknown-pleasures/index.html</p>
				</div>
			</>
		);
	}

	return (
		<>
			<Seo Sitetitle="Unknown Pleasures" description="Unknown Pleasures visualization experiment" meta={pageMeta} />
			<div
				style={{
					width: "100vw",
					height: "100vh",
					overflow: "hidden",
					background: "#000",
				}}
			>
				<iframe
					ref={iframeRef}
					src="/unknown-pleasures/index.html"
					style={{
						width: "100%",
						height: "100%",
						border: "none",
						display: "block",
					}}
					onError={handleIframeError}
					title="Unknown Pleasures"
				/>
			</div>
		</>
	);
};

export default UnknownPleasuresPage;
