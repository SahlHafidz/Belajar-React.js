import React from "react";

interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        marginRight: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "16px",
        width: "50%",
        boxSizing: "border-box" as React.CSSProperties["boxSizing"],
      }}
    />
  );
};

export default CustomInput;
