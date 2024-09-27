import React, { useEffect, useRef } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      onLoadingComplete();
    };

    const handleError = (e) => {
      console.error('Error playing the video:', e);
      onLoadingComplete(); // Complete loading if video fails
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('error', handleError);

    // Ensure the video plays
    video.play().catch(handleError);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('error', handleError);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <video 
        ref={videoRef}
        className="w-screen h-screen object-cover" // Gaya di sini untuk fullscreen
        muted
        playsInline
      >
        <source src="/assets/Localine Loading Animated.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingScreen;
