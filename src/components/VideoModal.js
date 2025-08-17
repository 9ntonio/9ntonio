import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
	const modalRef = useRef(null);
	const closeButtonRef = useRef(null);
	const previousActiveElement = useRef(null);

	useEffect(() => {
		if (isOpen) {
			// Store the previously focused element
			previousActiveElement.current = document.activeElement;

			// Prevent body scroll
			document.body.style.overflow = "hidden";

			// Focus the close button for keyboard accessibility
			setTimeout(() => {
				closeButtonRef.current?.focus();
			}, 100);

			const handleEscape = (e) => {
				if (e.key === "Escape") {
					onClose();
				}
			};

			const handleTabTrap = (e) => {
				if (e.key === "Tab") {
					const focusableElements = modalRef.current?.querySelectorAll(
						'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
					);

					if (focusableElements?.length) {
						const firstElement = focusableElements[0];
						const lastElement = focusableElements[focusableElements.length - 1];

						if (e.shiftKey && document.activeElement === firstElement) {
							e.preventDefault();
							lastElement.focus();
						} else if (!e.shiftKey && document.activeElement === lastElement) {
							e.preventDefault();
							firstElement.focus();
						}
					}
				}
			};

			document.addEventListener("keydown", handleEscape);
			document.addEventListener("keydown", handleTabTrap);

			return () => {
				document.removeEventListener("keydown", handleEscape);
				document.removeEventListener("keydown", handleTabTrap);
				document.body.style.overflow = "unset";

				// Restore focus to the previously focused element
				if (previousActiveElement.current) {
					previousActiveElement.current.focus();
				}
			};
		}
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center"
			role="dialog"
			aria-modal="true"
			aria-labelledby="video-modal-title"
			ref={modalRef}
		>
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
				onClick={onClose}
				aria-hidden="true"
			/>

			{/* Modal Content */}
			<div className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl">
				{/* Hidden title for screen readers */}
				<h2 id="video-modal-title" className="sr-only">
					{title} - Video Player
				</h2>

				{/* Close Button */}
				<button
					ref={closeButtonRef}
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full flex items-center justify-center text-white transition-all duration-200"
					aria-label={`Close ${title} video modal`}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						aria-hidden="true"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				{/* Video Container */}
				<div className="relative w-full" style={{ aspectRatio: "16/9" }}>
					<iframe
						src={`${videoUrl}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
						width="100%"
						height="100%"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
						title={`${title} - Video Player`}
						className="w-full h-full"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

VideoModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	videoUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default VideoModal;
