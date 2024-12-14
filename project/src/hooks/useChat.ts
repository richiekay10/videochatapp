import { useState, useCallback } from 'react';
import { Message, ChatState } from '../types/chat';

const DEMO_USER = 'You';

export function useChat() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    participants: [DEMO_USER],
  });

  const sendMessage = useCallback((text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: DEMO_USER,
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }, []);

  return {
    messages: chatState.messages,
    participants: chatState.participants,
    sendMessage,
  };
}