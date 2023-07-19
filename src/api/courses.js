import api from './api';

export const getCourses = (params) => api.axios.get('/classes', { params }).then((response) => response.data);

