import { useState } from "react";

/**
 * Custom hook for managing video modal state
 * @returns {Object} Video modal state and handlers
 */
export const useVideoModal = () => {
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
	const [currentVideo, setCurrentVideo] = useState(null);

	const openVideoModal = (url, title) => {
		setCurrentVideo({ url, title });
		setIsVideoModalOpen(true);
	};

	const closeVideoModal = () => {
		setIsVideoModalOpen(false);
		setCurrentVideo(null);
	};

	return {
		isVideoModalOpen,
		currentVideo,
		openVideoModal,
		closeVideoModal,
	};
};
