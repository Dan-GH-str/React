import React, { useState, useEffect} from "react";
import Counter from "../Components/Counter"
import "../styles/App.css"
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../UI/modal/MyModal";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesArray, getPagesCount } from "../utils/pages";      
import Pagination from "../UI/pagination/Pagination";
import { useRef } from "react";
import { useObserver } from "../hooks/useObserver";
import EndlessPagination from "../UI/pagination/EndlessPagination";

function Posts() {
  // Следует помнить, что изменение состояния - асинхронный процесс
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modalVisible, setModalVisible] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastPost = useRef()    // Далее объект lastPost станет ссылкой на тот элемент, в аттрибуте ref которого он будет указан

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAllPosts(limit, page)
    setPosts([...posts, ...response.data])
    const totalCountOfPosts = (response.headers['x-total-count'])
    setTotalPages(getPagesCount(totalCountOfPosts, limit))
  })

  // Данный хук выполняется каждый раз, когда меняется одна из его зависимостей, переданных вторым параметром(в данном случае page)
  useEffect(() => {
    // Загрузка постов 
    fetchPosts()
  }, [page, limit])

  useObserver(lastPost, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  const changePage = (page) => {
    // Меняется номер текущей страницы, а значит заново выполняется функция fetchPosts, запрашивая новые посты.
    setPage(page)
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModalVisible(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <main>
      <div className="App">
        <Counter/>
        <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
        <MyButton style={{marginTop: "15px"}} onClick={() => setModalVisible(true)}>
          Создать пост
        </MyButton>
        <MyModal visible={modalVisible} setVisible={setModalVisible}>
          <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: "15px 0"}}/>
        <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}/>
        {postError &&
          <h1>Произошла ошибка!</h1>
        }
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
        <div ref={lastPost} style={{height: 20, background: "#505050"}}></div> 
        {isPostsLoading &&
          <Loader/>
        }
        
        
        {/* Реализация возможности переключения страниц в случае обычной пагинации
          <Pagination 
            page={page}
            totalPages={totalPages}
            changePage={changePage}
          /> */}
      </div>
    </main>
  );
}

export default Posts;
