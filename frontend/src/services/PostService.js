'use strict'

const axios = require('axios');


// url to the posts file
// vaihto
//const url = 'https://localhost:3000/posts/';

const url = 'https://reviewer.jelastic.metropolia.fi/posts';

class PostService {

    // GET
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(url, 
                    { 
                        'headers': { 
                            'Authorization': token
                        }
                    });
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

    // GET
    static myPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(url + '/my', 
                    { 
                        'headers': { 
                            'Authorization': token
                        }
                    });
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
        const token = localStorage.getItem('token');

        return axios.delete(`${url}/${id}`,
        { 
            'headers': { 
                'Authorization': token
            }
        });
    }
}

export default PostService;