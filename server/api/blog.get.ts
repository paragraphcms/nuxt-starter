import { defineEventHandler } from "h3";
import { getParagraphClient } from "../utils/paragraph";

export default defineEventHandler(async () => {
  const client = getParagraphClient();
  const { data: posts, error } = await client.pages.list({
    requiredSlug: true,
  });

  if (error) {
    throw error;
  }

  return posts;
});
