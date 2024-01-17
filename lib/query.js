import { groq } from "next-sanity";
import client from "./client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      project_title,
      project_thumb {alt, "image": asset->url},
      project_description,
      designer,
    }`
  );
}