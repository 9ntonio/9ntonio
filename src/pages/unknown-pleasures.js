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
				}}
			>
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
				/>
			</div>
		</>
	);
};

export default UnknownPleasuresPage;
