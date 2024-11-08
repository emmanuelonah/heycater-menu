import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpService {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_HEYCARTER_MENU_SERVER_URL,
    headers: { 'Content-Type': 'application/json' },
  });

  public static get<ResponseType = unknown, C = unknown>(
    url: string,
    config?: AxiosRequestConfig<C>
  ) {
    return this.axiosInstance.get<ResponseType>(url, config);
  }

  public static post<Data = Record<string, unknown>, ResponseType = unknown, C = unknown>(
    url: string,
    data: Data,
    config?: AxiosRequestConfig<C>
  ) {
    return this.axiosInstance.post<ResponseType>(url, data, config);
  }

  public static put<Data = Record<string, unknown>, ResponseType = unknown, C = unknown>(
    url: string,
    data: Data,
    config?: AxiosRequestConfig<C>
  ) {
    return this.axiosInstance.put<ResponseType>(url, data, config);
  }

  public static patch<Data = Record<string, unknown>, ResponseType = unknown, C = unknown>(
    url: string,
    data: Data,
    config?: AxiosRequestConfig<C>
  ) {
    return this.axiosInstance.patch<ResponseType>(url, data, config);
  }

  public static delete<ResponseType = unknown, C = unknown>(
    url: string,
    config?: AxiosRequestConfig<C>
  ) {
    return this.axiosInstance.delete<ResponseType>(url, config);
  }
}
