import axios from "axios";
import { Profile } from "../types";

const baseURL = "http://localhost:3001";

export const client = axios.create({
  // @ts-ignore
  baseURL,
});

export async function getAllProfiles() {
  const response = await client.get(`/profile`);
  return response?.data;
}

export async function getProfileById(profileId: string) {
  const response = await client.get(`/profile/${profileId}`);
  return response?.data;
}

export async function updateProfileById(profileId: string, payload: Profile) {
  const response = await client.post(`/profile/${profileId}`, payload);
  return response?.data;
}

export default this;
