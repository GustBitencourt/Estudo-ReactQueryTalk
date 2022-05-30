import React from 'react'
import axios from 'axios'
import { queryCache, useQuery } from 'react-query'

export default function usePosts() {
  return useQuery(
    'posts',
    async () => await axios.get('/api/posts').then((res) => res.data)
  )
}
