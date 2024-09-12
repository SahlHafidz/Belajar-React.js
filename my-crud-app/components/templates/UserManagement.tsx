"use client";
import { useState, useEffect } from "react";
import UserForm from "../molecules/UserForm";
import UserList from "../organisms/UserList";
import axios from "axios";

// Definisikan tipe User
interface User {
  id: number;
  name: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]); // Inisialisasi state dengan tipe User[]
  const [editingUser, setEditingUser] = useState<User | null>(null); // Tipe User atau null

  useEffect(() => {
    fetchUsers(); // Ambil data user saat komponen pertama kali dimuat
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("/api/users");
    setUsers(response.data); // Simpan data user ke state
  };

  const addUser = async (name: string) => {
    const response = await axios.post("/api/users", { name });
    setUsers([...users, response.data]);
  };

  const updateUser = async (name: string) => {
    if (editingUser) {
      try {
        const response = await axios.put(`/api/users`, {
          id: editingUser.id,
          name,
        });
        setUsers(
          users.map((user) =>
            user.id === editingUser.id ? response.data : user
          )
        );
        setEditingUser(null); // Reset editingUser setelah update
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`/api/users?id=${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const startEditing = (user: User) => {
    setEditingUser(user); // Set user yang sedang diedit
  };

  return (
    <div>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <UserForm
        onSubmit={editingUser ? updateUser : addUser}
        initialName={editingUser ? editingUser.name : ""}
      />
      <UserList users={users} onEdit={startEditing} onDelete={deleteUser} />
    </div>
  );
};

export default UserManagement;
