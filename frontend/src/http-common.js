import axios from 'axios'

export default axios.create({
  baseURL: `${process.env.USING_HTTPS == true ? 'https' : 'http'}://${window.location.hostname}:3000`,
  headers: {
    "Content-type": "application/json",
    "Authorization": localStorage.getItem('token')
  }
});