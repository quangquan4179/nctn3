import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session: any = await getServerSession(req, res, authOption);
  if (!session?.token) {
    res.status(200).json([]);
  } else {
    const { pId } = req.query;

    try {
      const project = await axios.get(
        `http://localhost/api/v4/projects/${pId}/issues`,
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        },
      );
      res.status(200).json(project.data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
