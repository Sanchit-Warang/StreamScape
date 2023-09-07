import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const useGetData = <T>(key:(string | number | undefined)[], url: string) => {
    return useQuery({
        queryKey: key,
        queryFn: async (): Promise<T> => {
          await wait(1000)
          const { data } = await axios(url)
          return data as T
        },
      })
}

export default useGetData