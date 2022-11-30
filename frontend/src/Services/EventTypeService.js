import http from '../http-common'

const getAll = () => {
    return http.get("/event_types");
};

const get = id => {
    return http.get(`/event_types/${id}`);
};

const create = data => {
    return http.post("/event_types", data);
};

const update = (id, data) => {
    return http.put(`/event_types/${id}`, data);
};

const remove = id => {
    return http.delete(`/event_types/${id}`);
};

const removeAll = () => {
    return http.delete(`/event_types`);
};

const findByName = name => {
    return http.get(`/event_types?name=${name}`);
};

const EventTypeService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName
};

export default EventTypeService;