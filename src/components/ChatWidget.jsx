import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

// Mock responses for fallback
const mockLLMResponses = {
  "How do I sell my license?":
    "To sell your license, upload the details in our form, receive a valuation within 24 hours, and get paid via your preferred method.",
  "What licenses do you accept?":
    "We accept a wide range of licenses, including Microsoft, Adobe, Salesforce, and more. Contact us for specifics!",
  Default:
    "I'm here to help! Please ask about selling licenses or contact our support team for more details.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize OpenAI LLM with LangChain
  // console.log(import.meta.env.VITE_OPENAI_API_KEY);
  const llm = import.meta.env.VITE_OPENAI_API_KEY
    ? new ChatOpenAI({
        model: "gpt-3.5-turbo",
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        temperature: 0.7,
      })
    : null;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      if (llm) {
        // Use LangChain to call OpenAI API
        const prompt = new HumanMessage({
          content: `You are a support agent for SoftSell, a company that helps users sell unused software licenses. Provide concise, professional answers related to selling software licenses. If the question is unrelated or unclear, politely redirect to relevant topics or suggest contacting support. Question: ${input}`,
        });
        const response = await llm.invoke([prompt]);
        const botResponse = {
          sender: "bot",
          text: response.content.trim(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        // Fallback to mock responses
        const botResponse = {
          sender: "bot",
          text: mockLLMResponses[input] || mockLLMResponses["Default"],
        };
        setMessages((prev) => [...prev, botResponse]);
      }
    } catch (error) {
      console.error("Error with LLM:", error);
      const botResponse = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again or contact support.",
      };
      setMessages((prev) => [...prev, botResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleQuestion = async (question) => {
    setInput(question);
    await handleSend();
  };

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg"
        onClick={() => {
          console.log("Chat icon clicked");
          setIsOpen(true);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        💬 Chat
      </motion.button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-end justify-end p-4">
          <DialogPanel
            as={motion.div}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 w-full max-w-md rounded-lg shadow-lg p-4"
          >
            <DialogTitle className="text-lg font-bold mb-4">
              SoftSell Support
            </DialogTitle>

            <div className="h-64 overflow-y-auto mb-4 p-2 bg-gray-100 dark:bg-gray-700 rounded">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-secondary text-white"
                        : "bg-gray-200 dark:bg-gray-600"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="text-left">
                  <span className="inline-block p-2 rounded-lg bg-gray-200 dark:bg-gray-600">
                    Typing...
                  </span>
                </div>
              )}
            </div>

            <div className="mb-4 flex flex-col items-start">
              <p className="text-sm font-semibold mb-2">Try these questions:</p>
              <button
                className="text-sm text-primary hover:underline mr-2"
                onClick={() =>
                  handleExampleQuestion("How do I sell my license?")
                }
                disabled={isLoading}
              >
                How do I sell my license?
              </button>
              <button
                className="text-sm text-primary hover:underline"
                onClick={() =>
                  handleExampleQuestion("What licenses do you accept?")
                }
                disabled={isLoading}
              >
                What licenses do you accept?
              </button>
            </div>

            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border rounded-l dark:bg-gray-700 dark:border-gray-600"
                placeholder="Ask a question..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                className="bg-secondary text-white px-4 rounded-r disabled:bg-gray-400"
                disabled={isLoading}
              >
                Send
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
