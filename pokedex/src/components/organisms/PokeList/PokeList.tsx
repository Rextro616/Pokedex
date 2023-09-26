import './PokeList.css'
import PokemonCard from '../../molecules/PokemonCard/PokemonCard'

function PokeList(pokemon: { pokemon: any[] }) {

  return (
    <div id='pokeList' className='pokeList'>
    
        {pokemon.pokemon.map(p =>(
            <div id={p.name} className='pokeCarousel'>
                <PokemonCard img={p.sprites.front_default} color='#EEDEAB' num={'N. ° ' + p.id} nombre={p.name}/>
            </div>
        ))}
    </div>
  )
}

export default PokeList