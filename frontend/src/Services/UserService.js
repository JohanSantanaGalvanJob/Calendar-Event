import http from '../http-common'

// const getAll = () => {
//     return http.get("/events");
// };

// const get = id => {
//     return http.get(`/events/${id}`);
// };

const signUp = data => {
    return http.post("/users", data);
};

const signOut = id => {
    return http.delete(`/users/sign_out`);
};

// const create = data => {
//     return http.post("/events", data);
// };

// const update = (id, data) => {
//     return http.put(`/events/${id}`, data);
// };

// const remove = id => {
//     return http.delete(`/events/${id}`);
// };

// const removeAll = () => {
//     return http.delete(`/events`);
// };

// const findByTitle = name => {
//     return http.get(`/events?title=${title}`);
// };

const UserService = {
    signUp,
    signOut,
    // getAll,
    // get,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle
};

export default UserService;