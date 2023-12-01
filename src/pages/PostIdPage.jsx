import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/loader/Loader";
import PostService from "../API/PostService";
import Comments from "../Components/Comments";


const PostIdPage = () => {
    const params = useParams()  // Сам вытаскивает параметры с URL-запроса
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    console.log(comments);
    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <main>
            <div className="post__wrapper">
                <article className="post">
                    <h1>Вы открыли страницу поста с ID: {params.id}</h1>
                    {isLoading
                        ? <Loader/>
                        : <div className="post__title">{post.id}. {post.title}</div>
                    }
                </article>
                {isComLoading
                    ? <Loader/>
                    : <Comments comments={comments}/>
                }
            </div>
        </main>
    )
}

export default PostIdPage;