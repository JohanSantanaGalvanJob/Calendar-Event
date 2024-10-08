import http from '../http-common'
import axios from 'axios';

const getAll = () => {
    return http.get("/events");
};

const getEventsObject = async () => {
    try {
      const { data } = await axios.get('https://localhost:3000/events');
      const objectEvents = JSON.parse(JSON.stringify(data));
      return objectEvents;
    } catch (error) {
      console.log(error);
    }
  };

const get = id => {
    return http.get(`/events/${id}`);
};

const create = params => {
    console.log("todo loco")
    console.log(params)

    var data = new FormData();
    data.append('event[title]', params.title);
    data.append('event[description]', params.description);
    data.append('event[date]', params.date);
    data.append('event[starting_hour]', params.starting_hour);
    data.append('event[finished_hour]', params.finished_hour);
    data.append('event[url]', params.url);
    data.append('event[location_id]', params.location_id);
    data.append('event[event_type_id]', params.event_type_id);
    data.append('event[image]', params.image);


    var config = {
        method: 'post',
        url: 'https://'+ window.location.hostname +':3000/events',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem("token"),
        },
        data: data
    };
    console.log("antes de enviar", config)

    return axios(config);

};

const update = (id, data) => {
    return http.put(`/events/${id}`, data);
};

const remove = id => {
    return http.delete(`/events/${id}`);
};

const removeAll = () => {
    return http.delete(`/events`);
};

const findByTitle = title => {
    return http.get(`/events?title=${title}`);
};

const EventService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle,
    getEventsObject
};

export default EventService;