import { NextApiRequest, NextApiResponse } from "next";

let users = [
  { id: 1, name: "Hafidz" },
  { id: 2, name: "Ikhsan" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    users = users.filter((user) => user.id !== parseInt(id as string));
    res.status(204).end();
  }
}
