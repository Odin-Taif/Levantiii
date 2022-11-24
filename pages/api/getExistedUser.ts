import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthenticatedUser, getUserID } from "../../utils/firebaseFunction";

type Data = {
  serverExistedUser: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const userID = await getUserID();
  // const serverExistedUser = await getAuthenticatedUser(userID);
  const serverExistedUser = "tototo";
  res.status(200).json({
    serverExistedUser,
  });
}
