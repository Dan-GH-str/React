import { React, useState } from "react"
import MyButton from "../UI/button/MyButton"
import MyInput from "../UI/input/MyInput"

const PostForm = ({create}) => {
    const [inputs, setInputs] = useState({title: '', body: ''}) // Здесь title - первый инпут, body - второй инпут
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(), 
            title: inputs.title, 
            body: inputs.body
        }
    
        create(newPost)
        setInputs({title: '', body: ''})
    }

    return (
        <form>
            {/* Управляемый компонент */}
            <MyInput value={inputs.title} onChange={e => setInputs({...inputs, title: e.target.value})} type="text" placeholder="Название поста"></MyInput>
            <MyInput value={inputs.body} onChange={e => setInputs({...inputs, body: e.target.value})} type="text" placeholder="Описание поста"></MyInput>
            <MyButton onClick={addNewPost}>Создание поста</MyButton>
        </form>
    )
}

export default PostForm