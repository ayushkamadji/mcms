import axios from "axios"

const BASE_URL = "http://localhost:3000/api"
const base = axios.create({ baseURL: BASE_URL })
base.interceptors.request.use( function(config) {
  return config
})

export default base
