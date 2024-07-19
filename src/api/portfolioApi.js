import axios from "axios";
import { API_URL, API_KEY } from "../constants";
import { camelToSnakeCaseKeys } from "../common";

const portFolioApi = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

portFolioApi.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${API_KEY}`;
  config.data = camelToSnakeCaseKeys(config.data);
  if (config.data["avatar"] && config.data["avatar"].length !== 0 ) {
    config.data["avatar"] = config.data["avatar"][0]["file"];
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

export default portFolioApi;
