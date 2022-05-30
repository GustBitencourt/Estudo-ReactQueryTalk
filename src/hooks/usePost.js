import React from 'react'
import axios from 'axios'
import { useQuery, queryCache } from 'react-query'

export const fetchPost = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export default function usePost(postId) {
  //Fazendo o mesmo para os posts idividuais
  return useQuery(
    ['post', postId],
    async () => await fetchPost(postId), {
      initialData: () => {
        return queryCache.getQueryData('posts')?.find(d => d.id == postId)
      }
    }

  )
}
