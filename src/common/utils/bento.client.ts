import dotenv from "dotenv";
import { Analytics } from "@bentonow/bento-node-sdk";

dotenv.config();

export const bento = new Analytics({
  authentication: {
    publishableKey: process.env.BENTO_PUBLISHABLE_KEY!,
    secretKey: process.env.BENTO_SECRET_KEY!,
  },
  siteUuid: process.env.BENTO_SITE_UUID!,
});
