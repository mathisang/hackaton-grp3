import api from "./api";

export const getCourses = (params) => api.axios.get('/classes', {params : {
    ...params,
        populate: ['cover', 'ownerId', 'ownerId.picture', 'category'],
    }}).then((response) => response.data.data);
