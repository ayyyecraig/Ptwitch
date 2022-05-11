import Axios from 'axios'

export const BASE_URL = 'http://localhost:3001'

//for when youre deployed
// let apiUrl = process.env.NODE_ENV === 'production' ? 'https://ancient-atoll-31198.herokuapp.com/' : 'http://localhost:3001'

const Client = Axios.create({ baseURL: BASE_URL })


Client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
          config.headers['authorization'] = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

export default Client