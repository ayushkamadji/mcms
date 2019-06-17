import axios from "axios"
import Cookies from 'js-cookie'

const BASE_URL = "http://localhost:3000/api"
const baseAPI = axios.create({ baseURL: BASE_URL })
baseAPI.interceptors.request.use( function(config) {
  return config
})

const accessToken = Cookies.get('mc.accessToken');
const userId = Cookies.get('mc.userId');
const email = Cookies.get('mc.email');
const name = Cookies.get('mc.name');

const userInfo = { accessToken, userId, email, name };
const isAuthenticated = userId ? true : false;
const base = { baseAPI, isAuthenticated, userInfo }

export default base
