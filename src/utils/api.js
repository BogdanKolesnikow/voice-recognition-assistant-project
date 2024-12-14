import axios from 'axios';

const API_KEY = '';
const URL = ''; // Укажите конечную точку API

export const transcribeAudio = async (audioFile) => {
  const formData = new FormData();
  formData.append('audio', audioFile);

  const response = await axios.post(URL, formData, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
