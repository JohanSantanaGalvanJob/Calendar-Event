import { ILocation } from "../types/locationData"
import axios from 'axios';
import { useState, useEffect } from "react"


const createData = (name: string) => {
    return JSON.stringify({
        "location": {
            "name": name
        }
    });
}

export const getAllLocation = async () => {
    var getAll = {
        method: 'get',
        url: 'http://localhost:3000/locations',
        headers: {}
    };

    axios(getAll).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

export const getOneLocation = async (id: number) => {
    var getOne = {
        method: 'get',
        url: `http://localhost:3000/locations/${id}`,
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

export const createLocation = async (name: string) => {
    var post = {
        method: 'post',
        url: 'http://localhost:3000/locations',
        headers: {
            'Content-Type': 'application/json'
        },
        data: createData(name)
    };

    axios(post).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

export const updateLocations = async (id: number,name: string) => {
    var update = {
        method: 'put',
        url: `http://localhost:3000/locations/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: createData(name)
    };

    axios(update)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const deleteLocations = async (id: number) => {
    var erase = {
        method: 'delete',
        url: `http://localhost:3000/locations/${id}`,
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