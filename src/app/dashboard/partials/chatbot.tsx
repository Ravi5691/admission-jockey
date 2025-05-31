"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Send, Mic, Paperclip, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "card";
  cardData?: {
    title: string;
    description: string;
    images?: string[];
    action?: string;
  };
}

export function ChatInterface() {
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response based on input
    setTimeout(() => {
      let botResponse: Message;

      if (
        inputValue.toLowerCase().includes("graphic era") ||
        inputValue.toLowerCase().includes("university")
      ) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          content:
            "GEU Dehradun courses are offered to students at UG, PG, and certificate levels and are AICTE-approved. The university has been accredited by NAAC with an A+ grade and has ranked 74th by the NIRF 2023 in the Overall category.\n\nGraphic Era University, also known as GEU, is located in Dehradun, Uttarakhand, and was established in 1996. In 2008, the university attained its status as a Deemed university by the UGC, which is approved by the Ministry of Human Resource Development. It is one of the leading universities in Uttarakhand to offer quality education to students in the Engineering and Management fields.",
          sender: "bot",
          timestamp: new Date(),
          type: "card",
          cardData: {
            title: "Graphic Era University",
            description:
              "Leading university in Uttarakhand offering quality education",
            images: ["/placeholder.svg?height=200&width=300"],
            action: "Learn More",
          },
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          content:
            "I'm here to help you with information about universities, courses, admissions, and much more. What would you like to know?",
          sender: "bot",
          timestamp: new Date(),
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!hasStartedChat) {
    return (
      <>
        {/* Welcome Content */}

        <div className="flex-1 flex flex-col justify-center gap-30 h-screen  px-4 pb-32">
          <div className="text-center max-w-md mx-auto ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hey there <span className="text-purple-400">Aarav</span>!
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              I'm here to make things easier for you.
              <br />
              How can I help you?
            </p>
          </div>
          <div className="p-4 md:p-6">
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative flex items-center gap-2 md:gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 md:p-3"
                >
                  <Paperclip className="w-4 h-4 md:w-5 md:h-5" />
                </Button>

                <div className="relative flex-1">
                  <Input
                    placeholder="Whats your next discovery?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 pr-12 py-3 md:py-4 text-base md:text-lg rounded-xl md:rounded-2xl"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-lg p-2"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 md:p-3"
                >
                  <Mic className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
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
      <div className="flex-1 overflow-y-auto h-[85%] px-16 p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex gap-2 md:gap-3 max-w-[85%] md:max-w-[80%] ${
                message.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar
                className={`w-7 h-7 md:w-8 md:h-8 flex-shrink-0 ${
                  message.sender === "user" ? "bg-blue-600" : "bg-purple-600"
                }`}
              >
                <AvatarFallback className="text-white text-xs md:text-sm">
                  {message.sender === "user" ? "A" : "AI"}
                </AvatarFallback>
              </Avatar>

              <div
                className={`space-y-2 ${
                  message.sender === "user" ? "text-right" : ""
                }`}
              >
                <div
                  className={`inline-block p-3 md:p-4 rounded-lg text-sm md:text-base leading-relaxed ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-gray-800 text-white rounded-bl-sm"
                  }`}
                >
                  {message.content}
                </div>

                {message.type === "card" && message.cardData && (
                  <Card className="bg-gray-800 border-gray-700 mt-2 max-w-sm md:max-w-md">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                        <img
                          src="/placeholder.svg?height=120&width=160"
                          alt="University"
                          className="w-full md:w-32 lg:w-40 h-24 md:h-20 lg:h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-medium mb-2 text-sm md:text-base">
                            {message.cardData.title}
                          </h3>
                          <p className="text-gray-300 text-xs md:text-sm mb-3 line-clamp-2">
                            {message.cardData.description}
                          </p>
                          <Button
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm"
                          >
                            {message.cardData.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2 md:gap-3">
              <Avatar className="w-7 h-7 md:w-8 md:h-8 bg-purple-600">
                <AvatarFallback className="text-white text-xs md:text-sm">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="bg-gray-800 text-white p-3 rounded-lg rounded-bl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-800">
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative flex items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 md:p-3"
            >
              <Paperclip className="w-4 h-4 md:w-5 md:h-5" />
            </Button>

            <div className="relative flex-1">
              <Input
                placeholder="Whats your next discovery?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 pr-12 py-3 md:py-4 text-sm md:text-base rounded-xl"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-lg p-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800 p-2 md:p-3"
            >
              <Mic className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
