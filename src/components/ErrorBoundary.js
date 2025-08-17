import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null,
			retryCount: 0
		};
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		// Log error details for debugging
		console.error("ErrorBoundary caught an error:", error, errorInfo);

		this.setState({ errorInfo });

		// Report to error tracking service in production
		if (process.env.NODE_ENV === "production" && this.props.onError) {
			this.props.onError(error, errorInfo);
		}
	}

	handleRetry = () => {
		const { retryCount } = this.state;
		const maxRetries = this.props.maxRetries || 3;

		if (retryCount < maxRetries) {
			this.setState({
				hasError: false,
				error: null,
				errorInfo: null,
				retryCount: retryCount + 1
			});
		} else {
			// Force page reload after max retries
			window.location.reload();
		}
	};

	render() {
		if (this.state.hasError) {
			// Custom fallback UI if provided
			if (this.props.fallback) {
				return this.props.fallback(this.state.error, this.handleRetry);
			}

			// Default fallback UI
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
					<div className="text-center max-w-md mx-auto p-6">
						<h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
						<p className="text-gray-300 mb-4">
							We're sorry, but there was an error loading this page.
						</p>

						{process.env.NODE_ENV === "development" && this.state.error && (
							<details className="mb-4 text-left">
								<summary className="cursor-pointer text-red-400 mb-2">
									Error Details (Development)
								</summary>
								<pre className="text-xs bg-gray-800 p-2 rounded overflow-auto">
									{this.state.error.toString()}
									{this.state.errorInfo?.componentStack}
								</pre>
							</details>
						)}

						<div className="space-x-2">
							<button
								className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
								onClick={this.handleRetry}
							>
								{this.state.retryCount > 0 ? `Retry (${this.state.retryCount}/3)` : 'Try Again'}
							</button>
							<button
								className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
								onClick={() => window.location.reload()}
							>
								Reload Page
							</button>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
	fallback: PropTypes.func,
	onError: PropTypes.func,
	maxRetries: PropTypes.number,
};

export default ErrorBoundary;
