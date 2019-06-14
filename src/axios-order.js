import axios from "axios"

const instance = axios.create({
    baseURL:"https://dterd-21d82.firebaseio.com/"
})

export default instance;