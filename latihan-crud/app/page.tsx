// app/page.tsx
"use client";

import React from "react";
// import { DatePicker } from "antd";
import UserManagement from "../components/templates/UserManagement";

export default function Home() {
  return (
    <>
      <h1>User Management Page</h1>

      <UserManagement />
    </>
  );
}
