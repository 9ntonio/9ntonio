import React from "react";
import Seo from "../components/Seo";

const UnknownPleasuresPage = () => {
	const [mounted, setMounted] = React.useState(false);
	const iframeRef = React.useRef(null);

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}
	}, []);

	const handleIframeLoad = () => {
		if (iframeRef.current) {
			console.log("Unknown Pleasures iframe loaded");
		}
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
					onLoad={handleIframeLoad}
					title="Unknown Pleasures"
				/>
			</div>
		</>
	);
};

export default UnknownPleasuresPage;
