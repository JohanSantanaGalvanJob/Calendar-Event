import { IUser } from "../types/userData"
import axios from 'axios';
import { useState, useEffect } from "react"


const createData = (email: string,password: string,first_name: string,last_name: string,date_birth: Date) => {
    return JSON.stringify({
        "user": {
            "email": email,
            "password" : password,
            "first_name" : first_name,
            "last_name" : last_name,
            "date_birth" : date_birth
        }
    });
}

const signIn = (email: string,password: string) => {
    return JSON.stringify({
        "user": {
            "email": email,
            "password" : password
        }
    });
}

export const getAllUsers = async () => {
    var getAll = {
        method: 'get',
        url: 'http://localhost:3000/member_details',
        headers: {}
    };

    axios(getAll).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

export const getOneUser = async (id: number) => {
    var getOne = {
        method: 'get',
        url: `http://localhost:3000/member_details/${id}`,
        headers: {}
    };

    axios(getOne)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const createUser = async (email: string,password: string,first_name: string,last_name: string,date_birth: Date) => {
    var post = {
        method: 'post',
        url: 'http://localhost:3000/users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: createData(email,password,first_name,last_name,date_birth)
    };

    axios(post).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

// export const updateEventType = async (id: number,name: string) => {
//     var update = {
//         method: 'put',
//         url: `http://localhost:3000/event_types/${id}`,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: createData(name)
//     };

//     axios(update)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

export const LogIn = async (email: string,password: string) => {
    var update = {
        method: 'post',
        url: `http://localhost:3000/users/sign_in`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: signIn(email,password)
    };

    axios(update)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const signOut = async () => {
    var erase = {
        method: 'delete',
        url: `http://localhost:3000/users/sign_out`,
        headers: {}
    };

    axios(erase)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}