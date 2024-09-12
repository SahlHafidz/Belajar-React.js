import React from "react";

interface CustomButtonProps {
  onClick: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  label,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
};

// Contoh style button, bisa disesuaikan
const buttonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
};

export default CustomButton;
