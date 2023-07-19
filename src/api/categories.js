import api from './api';

export const getCategories = (params) => api.axios.get('/categories', { params }).then((response) => response.data);

