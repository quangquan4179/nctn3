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
    const { title, description, assignee_ids, projectId } = req.body;

    try {
      const issue = await axios.post(
        `http://localhost/api/v4/projects/${projectId}/issues`,
        {
          title,
          description,
          assignee_ids,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        },
      );
      console.log("🚀 ~ file: new.ts:30 ~ issue:", issue);
      res.status(200).json(issue.data);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
