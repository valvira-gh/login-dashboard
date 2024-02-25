"use client";
import { PrismaClient } from "@prisma/client";
import React from "react";

const fetchUsers = async () => {
  const prisma = new PrismaClient();

  const allUsers = await prisma.users.findMany();
  console.log(allUsers);

  await prisma.$disconnect();

  return allUsers;
};

export const FetchUsersBtn = () => {
  const users = fetchUsers();
  console.log(users);
  return <button onClick={fetchUsers}>Fetch Users</button>;
};
