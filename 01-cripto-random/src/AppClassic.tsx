import { FC, useEffect, useState } from "react"

const url = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'

export const AppClassic: FC = () => {

  const [randomNumber, setRandomNumber] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [refreshToken, setRefreshToken] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    setIsLoading( true )

    fetch( url )
      .then( resp => resp.json() )
      .then( data => setRandomNumber( data ))
      .catch( err => setError( err ))
      .finally(() => setIsLoading( false ))
  }, [ refreshToken ])

  return (
    <>
      {
        !isLoading 
        ? <h1>Numero: {randomNumber}</h1>
        : <p>Cargando...</p>
      }

      <div>{JSON.stringify( error )}</div>

      <button 
        disabled={ isLoading }
        onClick={ () => setRefreshToken( refreshToken + 1)}
      >Nuevo numero</button>

    </> 
  )
}
