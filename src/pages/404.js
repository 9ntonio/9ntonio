import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"; // For SEO purposes

/**
 * NotFoundPage - A 404 page template for Gatsby with JavaScript
 *
 * Gatsby automatically uses the component exported from src/pages/404.js as the 404 page
 *
 * Features:
 * - SEO optimized with Helmet
 * - Navigation back to home page using Gatsby Link
 * - Custom styling
 * - Error tracking capability
 */

const NotFoundPage = ({ location }) => {
	// Optional: Log or track 404 errors
	React.useEffect(() => {
		// You could send this information to your analytics platform
		console.log(`404 error occurred at path: ${location.pathname}`);
	}, [location.pathname]);

	// Handler to go back to previous page
	const handleGoBack = () => {
		// Use the browser's history to go back
		window.history.back();
	};

	return (
		<main style={styles.container}>
			{/* SEO head content */}
			<Helmet>
				<title>Antonio Almena | Page Not Found</title>
				<meta name="description" content="The page you're looking for doesn't exist or has been moved." />
			</Helmet>

			{/* Main error code display */}
			<h1 style={styles.errorCode}>404</h1>

			{/* Error title */}
			<h2 style={styles.title}>Page Not Found</h2>

			{/* Error message */}
			<p style={styles.message}>The page you're looking for doesn't exist or has been moved.</p>

			{/* Navigation buttons container */}
			<div style={styles.buttonContainer}>
				{/* Back button */}
				<button onClick={handleGoBack} style={styles.button} aria-label="Go back to previous page">
					Go Back
				</button>

				{/* Home button using Gatsby Link */}
				<Link to="/" style={styles.buttonPrimary} aria-label="Go to home page">
					Go to Home
				</Link>
			</div>
		</main>
	);
};

// Inline styles object
const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		textAlign: "center",
		padding: "0 20px",
		backgroundColor: "#D3D3D3",
		fontFamily: "Fredoka, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
	},
	errorCode: {
		fontSize: "12rem",
		fontWeight: 700,
		margin: "0",
		color: "#FF5C00",
		lineHeight: 1,
	},
	title: {
		fontSize: "3rem",
		fontWeight: 600,
		margin: "10px 0 20px",
		color: "#111827",
	},
	message: {
		fontSize: "1.25rem",
		color: "#6b7280",
		maxWidth: "600px",
		marginBottom: "1re",
	},
	buttonContainer: {
		display: "flex",
		gap: "15px",
		marginTop: "10px",
	},
	button: {
		padding: "10px 20px",
		fontSize: "1rem",
		backgroundColor: "#fff",
		color: "#374151",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		transition: "background-color 0.2s",
		textDecoration: "none",
	},
	buttonPrimary: {
		padding: "10px 20px",
		fontSize: "1rem",
		backgroundColor: "#FF5C00",
		color: "white",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		transition: "background-color 0.2s",
		textDecoration: "none",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
	},
};

// Export the page component
export default NotFoundPage;
