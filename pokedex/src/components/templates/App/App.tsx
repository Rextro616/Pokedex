import './App.css'
import SquareImg from '../../atoms/SquareImg/SquareImg'
import PokeNav from '../../organisms/PokeNav/PokeNav'
import LeftImg from '../../atoms/LeftImg/LeftImg'
import PokeList from '../../organisms/PokeList/PokeList'
import { useState, useEffect } from 'react'


function App() {

  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemons = async() => {
    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

    const res = await fetch(`${baseURL}`);
    const data = await res.json();

    const promise = data.results.map(async(pokemon: { url: RequestInfo | URL }) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    })

    const results = await Promise.all(promise);

    setAllPokemons(results);
  } 

  useEffect(() => {
    getPokemons()
  }, [])


  return (
    <>
      <header>
        <PokeNav/>
      </header>
      
      <hr
        style={{
            backgroundColor: '#3D3635',
            height: 10,
            borderBlockColor: 'transparent',
        }}
      />

      <main className='app'>

        <div className='app-row'>
        <LeftImg/>
        </div>

        <div className='app-row'>
          <SquareImg img="https://www.pngmart.com/files/12/Charizard-PNG-Free-Download.png" />
        </div>
          
        <div className='app-row'>
          <PokeList pokemon={allPokemons} />
        </div>

      </main>
      
    </>
  )
}

export default App
