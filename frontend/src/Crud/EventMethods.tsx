import { IEvent } from "../types/eventData"
import axios from 'axios';
import { useState, useEffect } from "react"


const createData = (title: string, description: string, date: Date, starting_hour: string, finished_hour:
    string, url: string, location_id: number, event_type_id: number) => {
    return JSON.stringify({
        "event": {
            "title": title,
            "description": description,
            "date": date,
            "starting_hour": starting_hour,
            "finished_hour": finished_hour,
            "url": url,
            "location_id": location_id,
            "event_type_id": event_type_id
        }
    });
}

export const getAllEvent= async () => {
    var getAll = {
        method: 'get',
        url: 'http://localhost:3000/events',
        headers: {}
    };

    axios(getAll).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

export const getOneEvent = async (id: number) => {
    var getOne = {
        method: 'get',
        url: `http://localhost:3000/events/${id}`,
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

export const createEvent = async (title: string, description: string, date: Date, starting_hour: string, finished_hour:
    string, url: string, location_id: number, event_type_id: number) => {
    var post = {
        method: 'post',
        url: 'http://localhost:3000/events',
        headers: {
            'Content-Type': 'application/json'
        },
        data: createData(title,description,date,starting_hour,finished_hour,url,location_id,event_type_id)
    };

    axios(post).then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });
}

export const updateEvent = async (id: number, title: string, description: string, date: Date, starting_hour: string, finished_hour:
    string, url: string, location_id: number, event_type_id: number) => {
    var update = {
        method: 'put',
        url: `http://localhost:3000/event_types/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: createData(title,description,date,starting_hour,finished_hour,url,location_id,event_type_id)
    };

    axios(update)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const deleteEvent = async (id: number) => {
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