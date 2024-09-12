"use client";

import React from "react";
import { List } from "antd";

interface User {
  id: number;
  name: string;
}

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete, onEdit }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user) => (
        <List.Item
          actions={[
            <a onClick={() => onEdit(user)}>Edit</a>,
            <a onClick={() => onDelete(user.id)}>Delete</a>,
          ]}
        >
          <List.Item.Meta title={user.name} />
        </List.Item>
      )}
    />
  );
};

export default UserList;
