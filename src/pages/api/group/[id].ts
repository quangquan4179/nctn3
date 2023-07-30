// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const session: any = await getServerSession(req, res, authOption);
  const project = await axios.get(
    `http://localhost/api/v4/groups/${id}/projects`,
    {
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
    },
  );

  res.status(200).json(project.data);
}
