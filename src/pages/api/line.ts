import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";

import { LINE_API_KEY } from "@/config";

const postHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<object>
) => {
  const body = new URLSearchParams({
    message: "\nブログにコメントがつきました！",
  }).toString();
  const response = await fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${LINE_API_KEY}`,
    },
    body,
  });
  const json = await response.json();
  if (json.status !== 200) throw new ApiError(json.status, json.message);

  res.status(200).json({ message: "success" });
};

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "POST":
        await postHandler(req, res);
        break;
      default:
        throw new ApiError(405, "Method Not Allowed");
    }
  } catch (e: any) {
    res
      .status(Number(e.statusCode) || 500)
      .json({ message: e.message || "不明なエラーです。" });
  }
};

export default handle;
