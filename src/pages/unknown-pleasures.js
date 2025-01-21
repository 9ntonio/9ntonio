import React from "react";
import Seo from "../components/seo"; // Adjust path as needed

const UnknownPleasuresPage = () => {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	// Define meta array outside of the render to keep it clear
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
				<div>Loading...</div>
			</>
		);
	}

	return (
		<>
			<Seo Sitetitle="Unknown Pleasures" description="Unknown Pleasures visualization experiment" meta={pageMeta} />
			<iframe
				src="/unknown-pleasures/index.html"
				style={{
					width: "100%",
					height: "100vh",
					border: "none",
					display: "block",
				}}
				title="Unknown Pleasures"
			/>
		</>
	);
};

export default UnknownPleasuresPage;
