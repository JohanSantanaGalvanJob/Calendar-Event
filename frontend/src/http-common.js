import axios from 'axios'

export default axios.create({
    // baseURL:'http://'+ window.location.hostname +':3000',
    baseURL:'http://'+ '192.168.1.63' +':3000',
    headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    });