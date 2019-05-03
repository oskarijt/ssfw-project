const axios = require('axios');

export default () => {
    
    return axios.create({
        // vaihto
        baseURL: 'https://reviewer.jelastic.metropolia.fi/user/',
        //baseURL: 'https://localhost:3000/user/'
    })
}