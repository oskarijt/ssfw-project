const axios = require('axios');

export default () => {
    return axios.create({
        //baseURL: 'https://localhost:3000/api/auth'
        baseURL: 'https://env-1271826.jelastic.metropolia.fi/api/auth'
    })
}