import React, { useState, useCallback } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { Controls } from './components/Controls';
import { ChatSidebar } from './components/chat/ChatSidebar';
import { useMediaStream } from './hooks/useMediaStream';
import { useChat } from './hooks/useChat';

function App() {
  const { stream, error } = useMediaStream();
  const { messages, sendMessage } = useChat();
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const handleToggleAudio = useCallback(() => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setAudioEnabled(audioTrack.enabled);
      }
    }
  }, [stream]);

  const handleToggleVideo = useCallback(() => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setVideoEnabled(videoTrack.enabled);
      }
    }
  }, [stream]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-red-600">Error: {error.message}</p>
          <p className="mt-2 text-gray-600">Please make sure you have allowed camera and microphone access.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto h-[calc(100vh-2rem)] flex gap-4">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
            <div className="aspect-video bg-gray-900 relative">
              {stream && <VideoPlayer stream={stream} muted />}
            </div>
            
            <div className="p-4 flex justify-center">
              <Controls
                audioEnabled={audioEnabled}
                videoEnabled={videoEnabled}
                onToggleAudio={handleToggleAudio}
                onToggleVideo={handleToggleVideo}
              />
            </div>
          </div>
        </div>
        
        <div className="w-96">
          <ChatSidebar messages={messages} onSendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;