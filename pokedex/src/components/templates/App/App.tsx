import './App.css'
import SquareImg from '../../atoms/SquareImg/SquareImg'
import PokemonCard from '../../molecules/PokemonCard/PokemonCard'
import PokeNav from '../../organisms/PokeNav/PokeNav'
import LeftImg from '../../atoms/LeftImg/LeftImg'


function App() {
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
          <PokemonCard color='#EEDEAB' num={'N. ° ' + 2} nombre='card'/>
        </div>

      </main>
      
    </>
  )
}

export default App
