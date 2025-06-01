"use client";

<<<<<<< HEAD
export default function DashboardPage() {
      return (
        <div className="flex flex-col items-center justify-center w-full max-h-screen lg:px-20 relative">
            <div className=" flex flex-col items-center h-[500px] justify-center tracking-wide gap-5 my-4">
              <h1 className="text-5xl font-bold">Hey there <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F69DBA,#A07DF1)]">Aarav</span>! </h1>
              <span className="text-center text-2xl">I’m here to make things easier for you. <br />How can I help you?</span>
            </div>

            <div className="lg:w-6xl w-full fixed lg:bottom-8 bottom-0 lg:left-auto left-1">
             <InputBar 
              showMicButton={true}
=======
import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Send, Mic, Paperclip, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Welcome from "./partials/welcome";
import { Message } from "./dashboard.type";
import InputBar from "./partials/inputBar";
import MessageComponent from "./partials/messageComponent";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!hasStartedChat) {
    return (
      <>
        {/* Welcome Content */}

        <div className="flex-1 flex flex-col justify-center gap-30 h-screen md:w-3/4 w-full mx-auto px-4 pb-32">
          <Welcome />
          <div className="p-4 md:p-6">
            <div className="w-full mx-auto">
              <InputBar
                setMessages={setMessages}
                hasStartedChat={hasStartedChat}
                setHasStartedChat={setHasStartedChat}
>>>>>>> origin/dev
              />
            </div>
          </div>
        </div>

        {/* Input Section */}
      </>
    );
  }

  return (
    <>
      {/* Messages */}
      <div className="flex flex-col min-h-screen bg-black text-white w-full md:w-3/4 mx-auto">
        {/* Messages Area */}
        <MessageComponent messages={messages} messagesEndRef={messagesEndRef} />
        {/* Input */}
        <div className="border-t border-gray-800 p-4 bg-black sticky bottom-10 md:bottom-0">
          <div className="w-full mx-auto">
            <InputBar
              setMessages={setMessages}
              hasStartedChat={hasStartedChat}
              setHasStartedChat={setHasStartedChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
