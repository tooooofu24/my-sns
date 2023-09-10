import { createClient } from "microcms-js-sdk";

import { API_KEY } from "@/config";

export const client = createClient({
  serviceDomain: "my-sns",
  apiKey: API_KEY,
});
