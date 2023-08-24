import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetData = <T>(key: string[], url: string) => {
    return useQuery({
        queryKey: key,
        queryFn: async (): Promise<T> => {
          const { data } = await axios(url)
          return data as T
        },
      })
}

export default useGetData