import axios, { AxiosRequestConfig } from "axios";

const BASE = "http://localhost:3030/";

export default function request(config: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: BASE,
    timeout: 60000,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data ?? {};
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}
