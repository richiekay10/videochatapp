import React from 'react';
import { Message } from '../../types/chat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface ChatSidebarProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export function ChatSidebar({ messages, onSendMessage }: ChatSidebarProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isOwnMessage={message.sender === 'You'}
          />
        ))}
      </div>

      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}