import axios, { AxiosResponse } from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const backendURL = isProduction
  ? (import.meta.env.PRODUCTION_BACKEND_URL as string)
  : (import.meta.env.DEVELOPMENT_BACKEND_URL as string);

// Handling data fetching and business logic
export interface UploadFileReturn {
  file: File;
  data: string;
}
export const uploadFile = async (file: File): Promise<AxiosResponse<UploadFileReturn>> => {
  console.log('backendURL: ', backendURL);
  const res = await axios.post(`${backendURL}/file/upload`, file);
  return res;
};
