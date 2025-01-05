import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className="preloader-overlay">
      {/*bootstrap spinner */}
      <div className="text-success text-opacity-75 preloader" role="status">
        <span>✿</span>
        <span>❀</span>
        <span>❁</span>
      </div>
    </div>
  );
};

export default Preloader;
