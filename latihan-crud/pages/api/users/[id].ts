import { NextApiRequest, NextApiResponse } from "next";

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const userId = Number(id);
    users = users.filter((user) => user.id !== userId);
    return res.status(200).json({ message: `User with id ${id} deleted.` });
  }

  if (req.method === "PUT") {
    const { name } = req.body;
    const userId = Number(id);
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users[userIndex].name = name;
    return res.status(200).json(users[userIndex]);
  }

  res.setHeader("Allow", ["DELETE", "PUT"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
