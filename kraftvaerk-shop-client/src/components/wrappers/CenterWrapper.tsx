import React from "react";

export const CenterWrapper: React.FC = ({ children }) => {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
      {children}
    </div>
  );
};
