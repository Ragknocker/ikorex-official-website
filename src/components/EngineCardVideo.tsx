import React, { useRef, useState } from 'react';

interface EngineCardVideoProps {
  src: string;
  poster: string;
  badgeText: string;
  altText: string;
}

export const EngineCardVideo: React.FC<EngineCardVideoProps> = ({
  src,
  poster,
  badgeText,
  altText
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      className={`engine-card-media has-video ${isPlaying ? 'is-playing' : 'is-paused'} ${
        isMuted ? 'is-muted' : 'is-unmuted'
      }`}
      onClick={togglePlay}
      style={{ cursor: 'pointer' }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="engine-media-element"
      >
        <img src={poster} alt={altText} className="engine-media-element" />
      </video>
      <div className="engine-media-overlay"></div>
      <div className="engine-media-badge">
        <span className="engine-badge-pulse"></span>
        <span>{badgeText}</span>
      </div>

      {/* Play/Pause Control Button */}
      <button
        className="engine-video-play-btn"
        type="button"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        onClick={togglePlay}
      >
        {isPlaying ? (
          <svg className="pause-icon" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1.5"></rect>
            <rect x="14" y="4" width="4" height="16" rx="1.5"></rect>
          </svg>
        ) : (
          <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        )}
      </button>

      {/* Sound / Mute Toggle Button */}
      <button
        className="engine-video-mute-btn"
        type="button"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        onClick={toggleMute}
      >
        {isMuted ? (
          <svg
            className="mute-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg
            className="unmute-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
    </div>
  );
};
