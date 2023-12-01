export const getPagesCount = (totalCountOfPosts, limit) => {
    return Math.ceil(totalCountOfPosts/limit)
}

export const getPagesArray = (totalPages) => {
    const result = []
    for(let i = 0; i < totalPages; i++) {
        result.push(i+1)
    }

    return result
}