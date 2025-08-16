import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt, className, width, height, ...props }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				rootMargin: "50px", // Start loading 50px before the image comes into view
				threshold: 0.1,
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div ref={imgRef} className={`${className} ${!isLoaded ? 'animate-pulse bg-gray-300' : ''}`} {...props}>
			{isVisible && (
				<img
					src={src}
					alt={alt}
					width={width}
					height={height}
					onLoad={() => setIsLoaded(true)}
					className="transition-opacity duration-300 w-full h-auto"
					style={{ opacity: isLoaded ? 1 : 0 }}
					loading="lazy"
					decoding="async"
				/>
			)}
		</div>
	);
};

export default LazyImage;
