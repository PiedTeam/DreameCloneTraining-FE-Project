import axios, { AxiosResponse } from 'axios';

// Handling data fetching and business logic
export interface UploadFileReturn {
  file: File;
  data: string;
}
export const uploadFile = async (file: File): Promise<AxiosResponse<UploadFileReturn>> => {
  const res = await axios.post(`http://localhost:4000/file/upload`, file);
  return res;
};
