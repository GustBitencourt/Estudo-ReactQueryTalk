import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function usePosts() {
  /**
   * @description useQuery substitui todo o código abaixo, como primeiro paramero uma string e o segundo uma função assincrona responsavel por pegar sua informação
   * - reactQuery lida com todo o ciclo de vida do componente
   */
   useQuery('posts', async () => await axios.get('/api/posts').then((res) => res.data))

   //CÓDIGO DESFEITO COM O USO DO reactQuery
  /* const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  })

  const fetch = async () => {
    setState({ isLoading: true })
    try {
      const data = await axios.get('/api/posts').then((res) => res.data)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }

  React.useEffect(() => {
    fetch()
  }, [])

  return {
    ...state,
    fetch,
  } */
}
