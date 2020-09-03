import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://domain",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
  },
};

const API_INSTANCE: AxiosInstance = axios.create(config);

API_INSTANCE.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return config;
});

export default API_INSTANCE;
