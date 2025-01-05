import React from "react";

// functional component to display the quote
interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <div className=" container card shadow rounded p-4 w-50  mt-3">
      <p className="h4 text-center fw-light text-muted fst-italic">{quote}</p>
    </div>
  );
};

export default Quote;
