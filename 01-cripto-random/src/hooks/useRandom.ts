import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async (): Promise<number> => {
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const data = await resp.json();
  return Number(data)
}

export const useRandom = () => {

  const randomQuery = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    // retry: false,
    // retryDelay: 1000,
    staleTime: 1000 * 5,
  })

  return {
    randomQuery
  }

} 