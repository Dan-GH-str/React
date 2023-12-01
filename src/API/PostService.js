import axios from "axios"

export default class PostService {
    static async getAllPosts(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            // query параметры, доступные специально для axios
            params: {
                _limit: limit,
                _page: page
            }
        })
        console.log(response);
        return response
    }

    static async getPostById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}