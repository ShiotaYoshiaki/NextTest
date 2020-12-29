import axios from "axios";

export async function apiCallGet(uri) {
  const response =　await axios.get(uri);
  return response;
}
