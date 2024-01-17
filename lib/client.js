import { createClient } from "@sanity/client";


const config = {
  projectId: "dq3kagr",
  dataset: "production",
  apiVersion: "2024-01-16",
  useCdn: false,
};

const client = createClient(config);

export default client;