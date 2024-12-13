import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Update based on your backend server
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUserData = async (userId: string) => {
  const response = await apiClient.get(`/user/${userId}`);
  return response.data;
};

export const updateUserData = async (userId: string, userData: any) => {
  const response = await apiClient.put(`/user/${userId}`, userData);
  return response.data;
};
