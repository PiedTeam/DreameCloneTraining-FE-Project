import axios, { AxiosResponse } from 'axios';

const isProduction = import.meta.env.MODE == 'production';
const backendURL = isProduction
  ? (import.meta.env.VITE_PRODUCTION_BACKEND_URL as string)
  : (import.meta.env.VITE_DEVELOPMENT_BACKEND_URL as string);

// Handling data fetching and business logic
export interface UploadFileReturn {
  file: File;
  data: string;
}

interface FieldType {
  myFile: {
    originFileObj: File;
  };
}
export const uploadFile = async (file: FieldType): Promise<AxiosResponse<UploadFileReturn>> => {
  console.log('mode: ', import.meta.env.MODE);
  console.log('backendURL: ', backendURL);
  const res = await axios.postForm(`${backendURL}/file/upload`, file);
  // const res = await axios.post(`${backendURL}/file/upload`, file, {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });
  return res;
};
