import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetTotalPages = <T>(key:(string | number)[], url: string) => {
    return useQuery({
        queryKey: key,
        queryFn: async (): Promise<T> => {
          const { data } = await axios(url)
          return data.total_pages as T
        },
      })
}

export default useGetTotalPages