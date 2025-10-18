"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from "react";
import { Send } from "lucide-react";

/**
 * Chatbot (with Botpress Cloud webchat integration)
 *
 * - Loads Botpress scripts (once) using the provided Cloud URLs.
 * - Exposes openBotpress() via ref so parent can open the webchat programmatically.
 * - Adds an "Open Botpress" action in header (you can remove or style as needed).
 *
 * Replace the configUrl/shareableUrl constants if Botpress provides new ones.
 */

const INJECT_URL = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
const CONFIG_JS_URL =
  "https://files.bpcontent.cloud/2025/08/26/13/20250826134832-LK296Z9M.js"; // the config js you provided
const SHAREABLE_FULLPAGE =
  "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/26/13/20250826134832-4YTM6FR4.json";

export const Chatbot = forwardRef(function Chatbot(_, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);
  const scriptsLoadedRef = useRef(false);

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    openBotpress: () => openBotpress(), // exposed method
  }));

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load Botpress scripts once on mount
  useEffect(() => {
    let mounted = true;

    const addScript = (src, attrs = {}) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement("script");
        s.src = src;
        Object.entries(attrs).forEach(([k, v]) => (s[k] = v));
        s.onload = () => resolve();
        s.onerror = (e) => reject(new Error(`Failed to load script ${src}`));
        // put both scripts in body; config script uses defer if provided
        document.body.appendChild(s);
      });

    (async () => {
      try {
        // don't reload if already loaded in page (important if multiple mounts)
        if (scriptsLoadedRef.current) return;

        await addScript(INJECT_URL);
        await addScript(CONFIG_JS_URL, { defer: true });

        // mark loaded
        if (!mounted) return;
        scriptsLoadedRef.current = true;
      } catch (err) {
        console.error("Error loading Botpress scripts:", err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // function to open the Botpress webchat (tries multiple common APIs, falls back to full-page)
  const openBotpress = () => {
    try {
      // Most Botpress Cloud configs expose botpressWebChat
      if (window.botpressWebChat && typeof window.botpressWebChat.open === "function") {
        window.botpressWebChat.open();
        return;
      }

      // older/newer variants: window.botpress.open
      if (window.botpress && typeof window.botpress.open === "function") {
        window.botpress.open();
        return;
      }

      // Another idea: if webchat exposes a toggle event or init, we could call init then open
      if (window.botpressWebChat && typeof window.botpressWebChat.init === "function") {
        // try a safe init then open
        window.botpressWebChat.init({}).catch?.(() => {});
        setTimeout(() => {
          try { window.botpressWebChat.open(); } catch (e) {}
        }, 300);
        return;
      }
    } catch (e) {
      // swallow and fallback
      console.warn("Botpress open attempt failed:", e);
    }

    // fallback: open the shareable URL in a new tab (full-page chat)
    window.open(SHAREABLE_FULLPAGE, "_blank", "noopener,noreferrer");
  };

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

  if (!isOpen)
    return null;

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up z-[9999]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/20">
        <h2 className="text-white font-semibold text-lg">Chat Assistant</h2>

        <div className="flex items-center gap-2">
          {/* Open Botpress button (calls the cloud widget) */}
          <button
            onClick={() => openBotpress()}
            className="text-sm px-3 py-1 bg-white/10 text-white rounded-md hover:opacity-80"
            title="Open Botpress Webchat"
          >
            Open Botpress
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:opacity-80 text-xl font-bold"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
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

      <style>{`
        /* Internal CSS tweaks for Botpress container */
        #bp-web-widget-container { z-index: 99999 !important; }
        @media (max-width: 480px) {
          #bp-web-widget-container { right: 8px !important; bottom: 8px !important; }
        }
      `}</style>
    </div>
  );
});