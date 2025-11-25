const { default: axios } = require("axios")

 const instance = axios.create({
    baseURL: 'http://localhost:5000'
})
export const useAxiosSecure = () => {
    return instance
}

