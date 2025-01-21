import React from "react";
import Seo from "../components/Seo";

const UnknownPleasuresPage = () => {
	const [mounted, setMounted] = React.useState(false);
	const [error, setError] = React.useState(null);
	const iframeRef = React.useRef(null);

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);

			// Debug: Check if the necessary files exist
			const filesToCheck = [
				"/unknown-pleasures/index.html",
				// Add your JS file paths here
				// e.g., '/unknown-pleasures/script.js'
			];

			Promise.all(
				filesToCheck.map((file) =>
					fetch(file)
						.then((response) => ({
							file,
							status: response.status,
							ok: response.ok,
						}))
						.catch((error) => ({
							file,
							error: error.message,
							ok: false,
						})),
				),
			).then((results) => {
				results.forEach((result) => {
					if (!result.ok) {
						console.error(`Failed to load ${result.file}:`, result);
					} else {
						console.log(`Successfully loaded ${result.file}`);
					}
				});
			});
		}
	}, []);

	const handleIframeLoad = () => {
		if (iframeRef.current) {
			try {
				// Log iframe content for debugging
				const iframeDocument = iframeRef.current.contentDocument;
				const scripts = iframeDocument?.getElementsByTagName("script");
				console.log("Scripts found:", scripts?.length);

				// Check if scripts are loaded
				if (scripts?.length) {
					Array.from(scripts).forEach((script, index) => {
						console.log(`Script ${index + 1}:`, {
							src: script.src,
							type: script.type,
							async: script.async,
							defer: script.defer,
						});
					});
				}
			} catch (e) {
				console.error("Error accessing iframe content:", e);
			}
		}
	};

	if (!mounted) {
		return (
			<>
				<Seo
					Sitetitle="Unknown Pleasures"
					description="Unknown Pleasures visualization experiment"
					meta={[
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
					]}
				/>
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

	return (
		<>
			<Seo
				Sitetitle="Unknown Pleasures"
				description="Unknown Pleasures visualization experiment"
				meta={[
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
				]}
			/>
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
					onLoad={handleIframeLoad}
					title="Unknown Pleasures"
				/>
			</div>
		</>
	);
};

export default UnknownPleasuresPage;
