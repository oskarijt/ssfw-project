const axios = require('axios');

var url = '';
// url to the posts file
if (process.env.NODE_ENV === 'development') {
    url = 'https://localhost:3000/api/auth/';
} else {
    url = 'https://env-1271826.jelastic.metropolia.fi/api/auth';
}

export default () => {
    
    return axios.create({
        baseURL: url
    })
}