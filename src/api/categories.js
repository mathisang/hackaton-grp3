import api from './api';

export const getCategories = (params) => api.axios.get('/categories', {
    params: {
        ...params,
        populate: 'image'
    }
}).then((response) => response.data);

