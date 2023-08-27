import axios from 'axios';

// getNotices
export const getNovelties = async () => {
  const response = await axios.get(`/notices`);
  return response.data;
};