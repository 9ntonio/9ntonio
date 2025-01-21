import React from "react";
import Seo from "../components/Seo";

const UnknownPleasuresPage = () => {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			setMounted(true);
		}
	}, []);

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
				}}
			>
				<iframe
					src="/unknown-pleasures/index.html"
					style={{
						width: "100%",
						height: "100%",
						border: "none",
						display: "block",
					}}
					title="Unknown Pleasures"
				/>
			</div>
		</>
	);
};

export default UnknownPleasuresPage;
