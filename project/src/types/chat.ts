export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  participants: string[];
}