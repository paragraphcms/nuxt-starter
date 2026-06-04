import {
  createError,
  defineEventHandler,
  getRouterParam,
} from "h3";
import { getParagraphClient } from "../../utils/paragraph";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug")?.trim();

  if (!slug) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }

  const client = getParagraphClient();
  const { data: page, error } = await client.page.getBySlug(slug);

  if (error) {
    throw error;
  }

  return page;
});
