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
        <img 
        src="https://img.icons8.com/?size=100&id=104309&format=png&color=000000"
        alt="flower icon"
        className="img-fluid ms-2 mb-1"
        style={{ width: "30px", height: "30px" }}>
        </img>
      </h1>
      <p className="lead mt-3 text-muted">{subtitle}</p>
    </header>
  );
};

export default Header;
