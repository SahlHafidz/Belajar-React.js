import React, { useState, useEffect } from "react";
import CustomButton from "../atoms/CustomButton";
import CustomInput from "../atoms/CustomInput";

interface UserFormProps {
  onSubmit: (name: string) => void;
  initialName: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialName }) => {
  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(initialName); // Update state ketika initialName berubah
  }, [initialName]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <CustomButton type="submit" onClick={() => {}} label="Save" />
    </form>
  );
};

export default UserForm;
