import axios from 'axios'

export default axios.create({
    baseURL:'https://'+ "192.168.103.41" +':3000',
    headers: {
        "Content-type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    });