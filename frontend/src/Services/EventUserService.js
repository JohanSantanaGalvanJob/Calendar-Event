import http from '../http-common'

const getAll = () => {
    return http.get("/event_users");
};

const get = id => {
    return http.get(`/event_users/${id}`);
};

const getByUser = id => {
    return http.get(`/event_users/get_events_for_user/${id}`);
};

const create = data => {
    return http.post("/event_users", data);
};

const update = (id, data) => {
    return http.put(`/event_users/${id}`, data);
};

const remove = id => {
    return http.delete(`/event_users/${id}`);
};

const removeAll = () => {
    return http.delete(`/event_users`);
};

const EventUserService = {
    getAll,
    get,
    getByUser,
    create,
    update,
    remove,
    removeAll,
};

export default EventUserService;