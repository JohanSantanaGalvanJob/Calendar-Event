import http from '../http-common'
import axios from 'axios';

const getAll = () => {
    return http.get("/users");
};

const get = id => {
    return http.get(`/users/${id}`);
};

const signUp = params => {

    console.log("todo loco")
    console.log(params)

    var data = new FormData();
    data.append('user[email]', params.email);
    data.append('user[password]', params.password);
    data.append('user[first_name]', params.firstname);
    data.append('user[last_name]', params.lastname);
    data.append('user[date_birth]', params.date_birth);
    data.append('user[image]', params.image);


    var config = {
        method: 'post',
        url: 'http://localhost:3000/users',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };

    return axios(config);

};

const login = params => {

    var data = new FormData();
    data.append('user[email]', params.email);
    data.append('user[password]', params.password);

    var config = {
        method: 'post',
        url: 'http://localhost:3000/users/sign_in',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };

    return axios(config);
};

const signOut = id => {
    return http.delete(`/users/sign_out`);
};

const update = (id, params) => {
    var data = new FormData();
    data.append('user[email]', params.email);
    data.append('user[first_name]', params.first_name);
    data.append('user[last_name]', params.last_name);
    data.append('user[date_birth]', params.date_birth);
    data.append('user[image]', params.image);

    var config = {
        method: 'put',
        url: `http://localhost:3000/users/${id}`,
        headers: {
            'Authorization': localStorage.getItem("token"),
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };

    return axios(config);
};

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
    getAll,
    login,
    get,
    // create,
    update,
    // remove,
    // removeAll,
    // findByTitle
};

export default UserService;