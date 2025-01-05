import React from "react"; // import react library to define and use components

// define the types of props => properties the header component accepts
interface HeaderProps {
  title: string; // a required title to display the heading
  subtitle?: string; //an optional titrle (?) -> optional
}

// define the header component as a functional component
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center py-4">
      <h1 className="display-6 mt-4 fw-normal text-center text-success text-opacity-75 fst-italic">
        {title}
      </h1>
      <p className="lead mt-3 text-muted">{subtitle}</p>
    </header>
  );
};

export default Header;
