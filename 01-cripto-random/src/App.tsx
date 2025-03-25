import { FC } from 'react';
import { useRandom } from './hooks/useRandom';

export const App: FC = () => {
  const { randomQuery } = useRandom()

  return (
    <>
      {!randomQuery.isFetching ? <h1>Numero: {randomQuery.data}</h1> : <p>Cargando...</p>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(randomQuery.error)}</div>

      <button 
        disabled={ randomQuery.isFetching }
        onClick={() => randomQuery.refetch()}
      >Nuevo numero</button>
    </>
  );
};
