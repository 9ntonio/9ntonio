import React, { useState, useEffect } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal Content */}
			<div className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-200"
					aria-label="Close video modal"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				{/* Video Container */}
				<div className="relative w-full" style={{ aspectRatio: "16/9" }}>
					<iframe
						src={`${videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
						width="100%"
						height="100%"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
						title={title}
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoModal;
