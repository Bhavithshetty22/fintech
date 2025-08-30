"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from "react";
import { Send } from "lucide-react";

export const Chatbot = forwardRef(function Chatbot(_, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Hello! How can I help you today?" },
      ]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-[9999]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/20">
        <h2 className="text-white font-semibold text-lg">Chat Assistant</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:opacity-80 text-xl font-bold"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] p-3 rounded-xl ${
              msg.type === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-white/20 text-white mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex p-4 border-t border-white/20">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-xl bg-white/20 text-white placeholder:text-white outline-none border border-white/10"
        />
        <button
          onClick={handleSend}
          className="ml-2 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
});
