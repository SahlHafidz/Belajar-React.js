"use client";

import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

interface UserFormProps {
  onSubmit: (name: string) => void;
  initialName?: string; // Initial value if updating user
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialName = "" }) => {
  const [name, setName] = useState<string>(initialName);

  useEffect(() => {
    setName(initialName); // Set form value to the initialName if editing
  }, [initialName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="primary" htmlType="submit">
        {initialName ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default UserForm;
