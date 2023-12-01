import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
    // Если выбрана сортировка по какому-либо критерию, то возвращается отсортированный массив, иначе возвращается массив в его изначальном состоянии
    if(sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
    }, [sort, posts]) // Если меняется что-то из масива, выполняется колбек

    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}