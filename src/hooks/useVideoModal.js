import { useState } from "react";

/**
 * Custom hook for managing video modal state
 * @returns {Object} Video modal state and handlers
 */
export const useVideoModal = () => {
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

	const openVideoModal = () => setIsVideoModalOpen(true);
	const closeVideoModal = () => setIsVideoModalOpen(false);

	return {
		isVideoModalOpen,
		openVideoModal,
		closeVideoModal,
	};
};
