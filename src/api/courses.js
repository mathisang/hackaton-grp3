import api from "./api";

export const getCourses = (params) => api.axios.get('/courses', {params : {
    ...params,
        populate: ['cover', 'ownerId', 'ownerId.picture', 'category'],
    }}).then((response) => response.data.data);
