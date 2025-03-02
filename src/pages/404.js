import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"; // For SEO purposes
import backgroundImage from "../../static/hazard.webp";

const NotFoundPage = ({ location }) => {
	const [isHovered, setIsHovered] = React.useState(false);
	const [isMobile, setIsMobile] = React.useState(false);

	// Optional: Log or track 404 errors
	React.useEffect(() => {
		// You could send this information to your analytics platform
		console.log(`404 error occurred at path: ${location.pathname}`);
	}, [location.pathname]);

	React.useEffect(() => {
		// Handle responsive design
		const mediaQuery = window.matchMedia("(max-width: 575px)");
		const handleResize = (e) => setIsMobile(e.matches);

		// Set initial value
		setIsMobile(mediaQuery.matches);

		// Add listener for window resize
		mediaQuery.addEventListener("change", handleResize);

		return () => mediaQuery.removeEventListener("change", handleResize);
	}, []);

	return (
		<div style={styles.container}>
			<Helmet>
				<title>Antonio Almena | Page Not Found</title>
				<meta name="description" content="The page you're looking for doesn't exist or has been moved." />
			</Helmet>

			<h1
				style={{
					...styles.errorCode,
					fontSize: isMobile ? "3rem" : "10rem",
				}}
			>
				Don't Forget
				<br />
				to Dream
			</h1>

			<div>
				<Link
					to="/"
					style={{
						...styles.buttonPrimary,
						...(isHovered && styles.buttonPrimaryHover),
					}}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					aria-label="Go to home page"
				>
					Home
				</Link>
			</div>
		</div>
	);
};

const styles = {
	container: {
		fontFamily: "Fredoka, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		textAlign: "center",
		padding: "0 1rem",
		backgroundColor: "#333",
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	errorCode: {
		fontWeight: 700,
		color: "#fff",
		lineHeight: 0.9,
		background: "#ff0000",
		padding: "1.5rem",
		borderRadius: "1rem",
		border: "1px solid #ff0000",
		boxSizing: "border-box",
		marginBottom: "3rem",
	},
	buttonPrimary: {
		padding: "0.5rem 0.75rem",
		fontSize: "1.25rem",
		fontWeight: 600,
		backgroundColor: "#ff0000",
		color: "#fff",
		border: "none",
		borderRadius: "0.5rem",
		cursor: "pointer",
		textDecoration: "none",
		transition: "all 0.25s ease-out",
	},
	buttonPrimaryHover: {
		backgroundColor: "#fff",
		color: "#ff0000",
	},
};

export default NotFoundPage;
