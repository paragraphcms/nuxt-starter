import { Client } from "@paragraphcms/client";

let paragraphClient: Client | undefined;
let paragraphClientApiKey: string | undefined;

export function getParagraphClient() {
  const { paragraphApiKey } = useRuntimeConfig();
  const apiKey = paragraphApiKey?.trim();

  if (!apiKey) {
    throw new Error("NUXT_PARAGRAPH_API_KEY environment variable is not set");
  }

  if (!paragraphClient || paragraphClientApiKey !== apiKey) {
    paragraphClient = new Client({ apiKey });
    paragraphClientApiKey = apiKey;
  }

  return paragraphClient;
}
