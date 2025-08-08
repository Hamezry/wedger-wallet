import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export async function apiRequest<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response: AxiosResponse<T> = await axios({
      url,
      ...config,
    });

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Request failed with status ${error.response.status}: ${error.response.statusText}`
        );
      }
      throw new Error(error.message);
    }
    // Unknown error shape
    throw new Error("An unexpected error occurred");
  }
}

