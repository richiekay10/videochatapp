import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  stream: MediaStream | null;
  muted?: boolean;
}

export function VideoPlayer({ stream, muted = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted={muted}
      className="rounded-lg w-full h-full object-cover"
    />
  );
}