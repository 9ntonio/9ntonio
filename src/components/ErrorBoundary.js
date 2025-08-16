import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		// Log error details for debugging
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Fallback UI
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
					<div className="text-center">
						<h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
						<p className="text-gray-300 mb-4">We're sorry, but there was an error loading this page.</p>
						<button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" onClick={() => window.location.reload()}>
							Reload Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
