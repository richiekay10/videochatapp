import React from 'react';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';

interface ControlsProps {
  audioEnabled: boolean;
  videoEnabled: boolean;
  onToggleAudio: () => void;
  onToggleVideo: () => void;
}

export function Controls({
  audioEnabled,
  videoEnabled,
  onToggleAudio,
  onToggleVideo,
}: ControlsProps) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow-lg">
      <button
        onClick={onToggleAudio}
        className={`p-3 rounded-full ${
          audioEnabled ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
        }`}
      >
        {audioEnabled ? <Mic size={24} /> : <MicOff size={24} />}
      </button>
      <button
        onClick={onToggleVideo}
        className={`p-3 rounded-full ${
          videoEnabled ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
        }`}
      >
        {videoEnabled ? <Video size={24} /> : <VideoOff size={24} />}
      </button>
    </div>
  );
}