import { http } from "@/utils/http";

export interface UploadResult {
  success: boolean;
  url?: string;
}

export const uploadFile = (data: FormData) => {
  return http.request<UploadResult>("post", "/upload", {
    headers: { "Content-Type": "multipart/form-data" },
    data
  });
};
