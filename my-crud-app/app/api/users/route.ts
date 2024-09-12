import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Hafidz" },
  { id: 2, name: "Ikhsan" },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newUser = { id: users.length + 1, name: body.name };
  users.push(newUser);
  return NextResponse.json(newUser);
}

export async function PUT(req: Request) {
  const { id, name } = await req.json();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { id, name };
    return NextResponse.json(users[userIndex]);
  }

  return NextResponse.json({ error: "User not found" }, { status: 404 });
}
export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = parseInt(url.searchParams.get("id") || "", 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  users = users.filter((user) => user.id !== id);
  return NextResponse.json({ message: "User deleted" });
}
