"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import {
  Bot,
  MessageCircle,
  Minimize2,
  Send,
  Sparkles,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const starterMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi, I am the BUKC virtual guide. Ask me about admissions, programs, student life, downloads, contact details, or this redesign project."
  }
];

const suggestions = [
  "How do I apply?",
  "What programs are offered?",
  "Show student resources",
  "Is this official?"
];

function getAssistantReply(question: string) {
  const query = question.toLowerCase();

  if (query.includes("apply") || query.includes("admission")) {
    return "For admissions, review the program you want, prepare your documents, submit the application details, attend the required test or interview, and then confirm your offer. You can start from the Admissions section on the homepage.";
  }

  if (
    query.includes("program") ||
    query.includes("degree") ||
    query.includes("academics") ||
    query.includes("course")
  ) {
    return "The redesign highlights program areas such as Computer Science, Management Sciences, Engineering Technology, and Social Sciences. Use the Programs section to compare the academic pathways.";
  }

  if (
    query.includes("student") ||
    query.includes("resource") ||
    query.includes("society") ||
    query.includes("club")
  ) {
    return "The Student Hub includes academic planning, student affairs, library support, wellbeing resources, quick links, societies, leadership tracks, sports, and community activities.";
  }

  if (
    query.includes("download") ||
    query.includes("prospectus") ||
    query.includes("calendar") ||
    query.includes("handbook")
  ) {
    return "The Downloads / Quick Links section includes placeholder resources such as the admissions prospectus, fee guide, academic calendar, scholarship information, transport routes, and student handbook.";
  }

  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("location")
  ) {
    return "The Contact section uses portfolio-safe placeholder information: Karachi, Pakistan, +92 21 0000 0000, and info@example.edu.pk. These are not official university contact channels.";
  }

  if (
    query.includes("official") ||
    query.includes("bahria") ||
    query.includes("real") ||
    query.includes("affiliated")
  ) {
    return "This is an unofficial redesign project for portfolio purposes only. It is not affiliated with Bahria University and does not use official logos, copied text, or official contact systems.";
  }

  if (
    query.includes("research") ||
    query.includes("innovation") ||
    query.includes("lab")
  ) {
    return "The Research & Innovation section presents placeholder themes such as applied AI, sustainable systems, and entrepreneurship to show how a modern university site could organize research content.";
  }

  return "I can help with admissions, programs, student resources, campus life, downloads, research, contact details, and the unofficial project disclaimer. Try asking: “What programs are offered?” or “How do I apply?”";
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const latestMessages = useMemo(() => messages.slice(-6), [messages]);

  function openChat() {
    setIsOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 80);
  }

  function sendMessage(value: string) {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      { role: "assistant", content: getAssistantReply(trimmed) }
    ]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      {isOpen ? (
        <div className="w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-lg border border-sky-200 bg-white shadow-soft">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/15">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-black leading-5">BUKC AI Guide</p>
                <p className="text-xs leading-4 text-blue-100">Campus help widget</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-md p-2 text-blue-100 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Minimize chatbot"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded-md p-2 text-blue-100 transition hover:bg-white/10 hover:text-white"
                onClick={() => setMessages(starterMessages)}
                aria-label="Clear chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto bg-slate-50 p-4">
            {latestMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[85%] rounded-lg bg-primary px-4 py-3 text-sm leading-6 text-white"
                    : "mr-auto max-w-[90%] rounded-lg border bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                }
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t bg-white p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => sendMessage(suggestion)}
                  className="rounded-md border bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-secondary/60 hover:bg-accent hover:text-primary"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about admissions..."
                className="min-h-11 flex-1 rounded-md border bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              />
              <Button type="submit" size="default" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={openChat}
          className="group flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-white shadow-soft transition hover:-translate-y-1 hover:bg-primary/90"
          aria-label="Open AI chatbot"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-md bg-white/15">
            <MessageCircle className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary">
              <Sparkles className="h-2.5 w-2.5" />
            </span>
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-black leading-5">Ask AI Guide</span>
            <span className="block text-xs leading-4 text-blue-100">Admissions, programs, support</span>
          </span>
        </button>
      )}
    </div>
  );
}
