import axios from 'axios';

// Укажи адрес своего backend (например, https://master-base.onrender.com)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
});

export const getMasters = () => API.get('/masters');
export const addMaster = (data) => API.post('/masters', data);
export const updateMaster = (id, data) => API.put(`/masters/${id}`, data);
export const deleteMaster = (id) => API.delete(`/masters/${id}`);
