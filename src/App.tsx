import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Quote from "./components/Quote";
import Preloader from "./components/Preloader";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

//define the app component as the proot for your application
const App: React.FC = () => {
  //state hook for quote
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quote, setQuote] = useState<string>("");

  //function to get a random quote from the array
  const getRandomQuote = () => {
    setIsLoading(false);
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  //useEffect to set the quote once when the component mounts
  useEffect(() => {
    setTimeout(() => {
      getRandomQuote(); //sets a random quote when the page loads
    }, 2000);
  }, []);

  return (
    // react fragments groups elements without adding extra nodes
    <>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
        <Header
          title="Your Daily Boost"
          subtitle="Get inspired with a new quote today!"
        />

        {/*aditional conent can go here*/}
        <main>
          {/* Show the Preloader while loading */}
          {isLoading ? (
            <Preloader />
          ) : (
            <Quote quote={quote} /> // Render Quote component when loading is complete
          )}
        </main>
        <footer className="mt-5 text-center text-muted">
          <p>Made with ♡ by Sunny</p>
        </footer>
      </div>
    </>
  );
};

export default App;
