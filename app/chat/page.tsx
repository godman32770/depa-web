"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "@/components/ChatMessage";
import { sendMessage } from "@/lib/api";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await sendMessage(input);
      const aiMessage: Message = { role: "assistant", content: response.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError("Failed to send message");
    }
  };

  if (!user) return <div className="text-center text-gray-600">Please login to full access the chat</div>;

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] bg-white rounded-lg shadow-lg">
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">Start chatting by typing a message below!</p>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage key={index} role={msg.role} content={msg.content} />
          ))
        )}
      </ScrollArea>
      {error && <p className="text-red-500 p-2 text-sm">{error}</p>}
      <form onSubmit={handleSubmit} className="flex p-4 bg-gray-100 rounded-b-lg border-t">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 mr-2 border-gray-300 focus:border-secondary transition-colors rounded-full"
        />
        <Button
          type="submit"
          className="bg-orange-500 hover:bg-blue-700 text-white transition-colors rounded-full"
        >
          Send
        </Button>
      </form>
    </div>
  );
}