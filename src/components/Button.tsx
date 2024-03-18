import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  type?: string;
  onClick?: () => void;
}

function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
