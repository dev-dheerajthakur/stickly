// src/chat/chat.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private messages: { room: string; msg: {
    id: number;
    sender: string;
    content: string;
    timestamp: string;
} }[] = [];

  saveMessage(message: { room: string; msg: { id: number; sender: string; content: string; timestamp: string; } }) {
    // message.msg.sender = 'Anonymous';
    this.messages.push(message);
    return message;
  }

  getMessages(room: string) {
    return this.messages.filter((msg) => msg.room === room);
  }
}
