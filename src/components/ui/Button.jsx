import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-white rounded-sm bg-brand hover:brightness-110"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
