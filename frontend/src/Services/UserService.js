import http from '../http-common'
import axios from 'axios';

// const getAll = () => {
//     return http.get("/events");
// };

// const get = id => {
//     return http.get(`/events/${id}`);
// };

const signUp = params => {
    // return http.post("/users", data);

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
            // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlYzAzYTBiZC1jOTVjLTQ0Y2MtYjc2Yy1kNzM3YTk3MGVkM2UiLCJzdWIiOiIxMCIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY3MDAwODYwMywiZXhwIjoxNjcwMDE1ODAzfQ.jXSM7YTCqndCeb6m35kLxkPC2RntMrpD99fDKDlB_L0',
            // 'Cookie': '_interslice_session=VFeUiEVtAZSAHzGxlzrmrCyrfRQ0afIqefgIUOPwk0FlNTO00v8mb2PdFNJOJKlxL4qwJDCu%2Bbe1m5pi9gaKiVRge8gF%2BVmhscz5n1wdHvmC6bxKGSXvvdubmZ8y1RmOCJYhfX%2B50LZR4rLZlVk4%2BMxomLAagK0wsx6ILnDPPm6I1BKt2z4l18Ltd02WJub7stRqdOcUEIaEBLKTY6KhjqEIms4yXmWJqOdYfxnw%2BbfhpipxVv%2Bf%2BhGjxCYKW3GQRjRkg2YJixSipNyKzj0dFmFfkSEvTlcl06QN--sTp0FH0SYwCjmetu--9p%2FRSk9xTjQelmwap3ZNrQ%3D%3D',
            'Content-Type': 'multipart/form-data'
        },
        data: data
    };

    return axios(config);

        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
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