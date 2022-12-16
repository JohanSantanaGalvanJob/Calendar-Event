import axios from 'axios'

export default axios.create({
    baseURL:'http://'+ window.location.hostname +':3000',
    headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    });