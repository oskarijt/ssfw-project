const axios = require('axios');

export default () => {
    
    return axios.create({
        // vaihto
        baseURL: 'https://env-1271826.jelastic.metropolia.fi/user/',
        //baseURL: 'https://localhost:3000/user/'
    })
}