import api from "./api";

export const getApplications = (params) => api.axios.get('/applications', {params: {
    ...params,
        populate: ['owner', 'userRequested', 'userRequested.picture']
    }}).then(({data}) => data.data);

export const getApplicationMessages = (applicationId) => {
    return api.axios.get('/application-messages', {params: {
        filter: {
            application: {
                "id": {
                    $eq: applicationId
                }
            }
        }
    }}).then(({data}) => data.data)
        .catch(() => [])
}
