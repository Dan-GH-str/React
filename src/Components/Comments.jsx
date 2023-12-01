import React from "react";
import cl from "./styles/Comments.module.css"

const Comments = ({comments}) => {
    return (
        <section className={cl.comments}>

            <h1 className={cl.comments__header}>Комментарии</h1>
            {comments.map(comm => 
                <div className={cl.comment} key={comm.id}>
                    <div className={cl.comment__header}>
                        <h2 className={cl.comment__title}>{comm.email}</h2>
                    </div>
                    <div className={cl.comment__body}>{comm.body}</div>
                </div>
            )}

        </section>
    )
}

export default Comments;