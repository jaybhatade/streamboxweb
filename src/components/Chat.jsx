import { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {movieList} from '../MovieData'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const API_KEY = 'AIzaSyB8ZEEbt6pzOuozn3HtCtImv6ONxW9Lkzk'; // Replace with your actual API key
  const genAI = new GoogleGenerativeAI(API_KEY);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = { text: inputMessage, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Prepare the prompt for movie recommendations
      const prompt = `Based on the following movie data: ${JSON.stringify(movieList)}, 
                      and the user's request: "${inputMessage}", 
                      provide movie recommendations. Only recommend movies from the given data. 
                      If the request doesn't match any movies, politely say so and suggest alternatives from the list.
                      Keep your response concise and friendly don't provide information about movies outside of the data.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, there was an error processing your request.', sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-[400px] border border-gray-300 rounded-lg overflow-hidden">
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.sender === 'user'
                ? 'bg-zinc-800 ml-auto text-white'
                : 'bg-zinc-700 mr-auto text-white'
            } max-w-[70%]`}
          >
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div className="bg-zinc-700 text-white p-2 rounded-lg mr-auto max-w-[70%]">
            Thinking...
          </div>
        )}
      </div>
      <form onSubmit={sendMessage} className="flex p-4 bg-zinc-800">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask for movie recommendations..."
          className="flex-1 px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;