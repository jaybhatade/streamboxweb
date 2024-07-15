import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

  const fetchData = async () => {
    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();
    setMessages((prevMessages) => [...prevMessages, { text, isUser: false }]);
    setLoading(false);
  };

  const handleSendMessage = () => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser: true }]);
    fetchData();
    setMessage("");
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser? "justify-end" : "justify-start"}`}>
            <div
              className={`bg-${message.isUser? "blue-500" : "gray-200"} p-2 rounded-md`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 rounded-md"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;