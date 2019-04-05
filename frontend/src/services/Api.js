const axios = require('axios');

export default () => {
    return axios.create({
        baseURL: 'https://localhost:3000/api/auth'
    })
}