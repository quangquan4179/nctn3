// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { email, token } = req.body;
  const prisma = new PrismaClient();
  const data = await prisma.token.upsert({
    where: {
      email: email,
    },
    create: {
      email: email,
      token: token,
    },
    update: {
      email,
      token,
    },
  });
  res.status(200).json(data);
}
