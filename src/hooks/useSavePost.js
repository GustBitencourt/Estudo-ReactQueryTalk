import React from 'react'
import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

export default function useSavePost() {
  return useMutation(
    (values) => axios
      .patch(`/api/posts/${values.id}`, values)
      .then((res) => res.data),
    {
      onSuccess: (post) => {
        queryCache.invalidateQueries(['posts', post.id]);
      }
    }
  )
}
