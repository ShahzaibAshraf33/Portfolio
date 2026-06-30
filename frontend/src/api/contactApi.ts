import axiosInstance from './axiosInstance';
import type{ ContactFormData } from "../api/contact";

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    createdAt: string;
  };
}

export const submitContactForm = async (
  data: ContactFormData,
): Promise<ContactApiResponse> => {
  const response = await axiosInstance.post<ContactApiResponse>(
    '/contact',
    data,
  );
  return response.data;
};