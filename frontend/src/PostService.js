'use strict'

const axios = require('axios');

// url to the posts file
const url = 'http://localhost:3000/api/posts/';

class PostService {

    // GET
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;

                resolve(
                    data.map(post => ({
                        ...post
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }

    // CREATE
    static insertPost(form) {
        return axios.post(url + '/upload', {
            form
        })
    }

    // DELETE
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;