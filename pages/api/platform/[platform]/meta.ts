import { getPlatformMetadataByPlatform } from "@/services/platform-graph";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { platform } = req.query;
  const metadata = await getPlatformMetadataByPlatform(platform as string);

  const ONE_DAY = 60 * 60 * 24;
  res.setHeader(
    "Cache-Control",
    `public, s-maxage=${60}, stale-while-revalidate=${ONE_DAY}`
  );
  return res.send({ platform: metadata });
};

export default handler;
