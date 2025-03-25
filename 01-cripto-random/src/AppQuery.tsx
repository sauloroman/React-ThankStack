import { FC, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RandomNumber } from './components/RandomNumber';

const getCryptoNumber = async (): Promise<number> => {

  // throw new Error('No se pudo obtener el numero')

  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const data = await resp.json();
  return Number(data);
};

export const AppQuery: FC = () => {
  
  const { isLoading, isFetching, data: randomNumber, error, refetch } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getCryptoNumber,
    // retry: false,
    // retryDelay: 1000,
    staleTime: 1000 * 5,
  });

  return (
    <>
      {!isFetching ? <h1>Numero: {randomNumber}</h1> : <p>Cargando...</p>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(error)}</div>

      <button 
        disabled={ isFetching }
        onClick={() => refetch()}
      >Nuevo numero</button>
    </>
  );
};
