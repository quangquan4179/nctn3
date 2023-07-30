// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, description, namespace_id } = req.body;
  const session: any = await getServerSession(req, res, authOption);
  try {
    const project = await axios.post(
      `http://localhost/api/v4/projects/`,
      {
        name,
        description,
        namespace_id,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      },
    );

    res.status(200).json(project.data);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
}
