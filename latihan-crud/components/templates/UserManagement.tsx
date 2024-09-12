"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "../molecules/UserForm";
import UserList from "../organisms/UserList";

interface User {
  id: number;
  name: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("/api/users");
    setUsers(response.data);
  };

  const addUser = async (name: string) => {
    const response = await axios.post("/api/users", { name });
    setUsers([...users, response.data]);
  };

  const updateUser = async (name: string) => {
    if (editingUser) {
      const response = await axios.put(`/api/users/${editingUser.id}`, {
        name,
      });
      setUsers(
        users.map((user) => (user.id === editingUser.id ? response.data : user))
      );
      setEditingUser(null); // Reset form after update
    }
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  const startEditing = (user: User) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <UserForm
        onSubmit={editingUser ? updateUser : addUser}
        initialName={editingUser ? editingUser.name : ""}
      />
      <UserList users={users} onDelete={deleteUser} onEdit={startEditing} />
    </div>
  );
};

export default UserManagement;
