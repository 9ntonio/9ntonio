import React, { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo";

const UnknownPleasuresPage = () => {
  // Create a reference to the iframe element
  const iframeRef = useRef(null);

  // State to track if the iframe loaded successfully
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Effect to handle iframe loading and potential issues
  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    // Handle iframe load event
    const handleLoad = () => {
      console.log("Unknown Pleasures iframe loaded successfully");
      setIframeLoaded(true);

      // Try to resolve cross-origin issues by sending a message
      try {
        if (iframe.contentWindow) {
          // This is just an attempt to communicate with the iframe
          iframe.contentWindow.postMessage('iframeLoaded', '*');
        }
      } catch (e) {
        console.log("Note: Cross-origin communication not possible", e);
      }
    };

    // Handle iframe error event
    const handleError = (error) => {
      console.error("Error loading Unknown Pleasures iframe:", error);
      setHasError(true);
    };

    // Add event listeners
    iframe.addEventListener("load", handleLoad);
    iframe.addEventListener("error", handleError);

    // Set a timeout to check if iframe loaded after 5 seconds
    const timeoutId = setTimeout(() => {
      if (!iframeLoaded) {
        console.warn("Iframe may not have loaded properly");
        // Don't set error here - the iframe might be loading fine even if we can't access its content
      }
    }, 5000);

    // Clean up event listeners
    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.removeEventListener("error", handleError);
      clearTimeout(timeoutId);
    };
  }, [iframeLoaded]);

  return (
    <>
      <Seo
        Sitetitle="Unknown Pleasures"
        description="Unknown Pleasures visualization experiment inspired by Joy Division's Unknown Pleasures album art"
        meta={[
          {
            name: "keywords",
            content: "unknown pleasures,visualization,experimental,music,data,javascript,joy division,antonio almena, 9ntonio",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "robots",
            content: "index,follow",
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
          backgroundColor: "#000", // Black background as fallback
        }}
      >
        {/* Show error message if iframe failed to load */}
        {hasError && (
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            maxWidth: "80%",
            fontFamily: "system-ui, -apple-system, sans-serif",
            zIndex: 10,
          }}>
            <h2>Unable to load Unknown Pleasures</h2>
            <p>Please try refreshing the page or visit again later.</p>
            <p>
              <a
                href="/"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Return to homepage
              </a>
            </p>
          </div>
        )}

        {/* The iframe that contains the Unknown Pleasures experiment */}
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
          allow="autoplay; microphone; camera; midi; geolocation; accelerometer; gyroscope; payment; magnetometer; encrypted-media; usb"
          loading="eager"
          importance="high"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads allow-modals"
        />
      </div>
    </>
  );
};

export default UnknownPleasuresPage;
