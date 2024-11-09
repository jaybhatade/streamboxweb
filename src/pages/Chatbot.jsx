import { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { movieList } from "../MovieData";
import { Link } from "react-router-dom";

const API_KEY = "AIzaSyB8ZEEbt6pzOuozn3HtCtImv6ONxW9Lkzk"; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

const ScrollComponent = ({ movies }) => {
  return (
    <div className="pt-4">
      <div className="text-2xl text-white pl-2">Recommended Movies</div>
      <div
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide py-2"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/player/${movie.id}`}
            className="flex-shrink-0 p-2 w-[150px] hover:scale-110 transition-all ease-in-out duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[200px] rounded-lg shadow-md object-cover"
            />
            <div className="pt-1">
              <h1 className="text-xs text-[#cfcfcf] line-clamp-2 overflow-hidden">
                {movie.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const MovieRecommendationChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = { text: inputMessage, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Based on the following movie data: ${JSON.stringify(
        movieList
      )}, 
                      and the user's request: "${inputMessage}", 
                      provide movie recommendations. Only recommend movies from the given data. 
                      If the request doesn't match any movies, politely say so and suggest alternatives from the list. 
                      Keep your response concise and friendly. Don't provide information about movies outside of the data. you can give summary of the movie by your own.
                      Return your response as a JSON object with two properties:
                      1. 'message': Your text response to the user
                      2. 'recommendedMovies': An array of movie IDs that you're recommending`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();

      // Parse the JSON response
      const parsedResponse = JSON.parse(responseText);

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: parsedResponse.message, sender: "bot" },
      ]);

      // Update recommended movies
      const newRecommendedMovies = parsedResponse.recommendedMovies
        .map((id) => movieList.find((movie) => movie.id === id))
        .filter(Boolean);

      setRecommendedMovies(newRecommendedMovies);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, there was an error processing your request.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-zinc-900 overflow-hidden">
      <div className="flex-1 overflow-hidden flex flex-col">
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-zinc-800 ml-auto text-white"
                  : "bg-zinc-700 mr-auto text-white"
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
        <ScrollComponent movies={recommendedMovies} />
      </div>
      <form onSubmit={sendMessage} className="flex p-4 bg-zinc-800 mb-[10vh]">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask for movie recommendations..."
          className="flex-1 px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MovieRecommendationChat;
