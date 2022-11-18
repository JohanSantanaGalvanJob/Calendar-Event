import { IEventType } from "../types/eventTypeData"
import axios from 'axios';
import { useState, useEffect } from "react"


const createData = (name: string) => {
    return JSON.stringify({
        "event_type": {
            "name": name
        }
    });
}

export const getAllEventType = async () => {
    var getAll = {
        method: 'get',
        url: 'http://localhost:3000/event_types',
        headers: {}
    };

    axios(getAll).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

export const getOneEventType = async (id: number) => {
    var getOne = {
        method: 'get',
        url: `http://localhost:3000/event_types/${id}`,
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

export const createEventType = async (name: string) => {
    var post = {
        method: 'post',
        url: 'http://localhost:3000/event_types',
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

export const updateEventType = async (id: number,name: string) => {
    var update = {
        method: 'put',
        url: `http://localhost:3000/event_types/${id}`,
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

export const deleteEventType = async (id: number) => {
    var erase = {
        method: 'delete',
        url: `http://localhost:3000/event_types/${id}`,
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






