import React from 'react'
import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

export default function useCreatePost() {
  return useMutation(
    (values) => axios.post('/api/posts', values).then((res) => res.data),
    {
      onMutate: (newPost) => {
        const oldPosts = queryCache.getQueryData('posts')

        if (queryCache.getQueryData('posts')) {
          queryCache.setQueryData('posts', oldPost => {
            return [...oldPost, newPost]
          })
        }

        return () => queryCache.setQueryData('posts', oldPosts)
      },
      onError: (error, _newPost, rollback) => {
        console.log(error)
        if (rollback) rollback()
        
      },
      onSettled: () => {
        queryCache.invalidateQueries('posts');
      }
    }
  )
}
