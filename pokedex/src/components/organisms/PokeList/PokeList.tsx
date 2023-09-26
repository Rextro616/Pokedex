import './PokeList.css'
import PokemonCard from '../../molecules/PokemonCard/PokemonCard'

function PokeList(pokemon) {

  return (
    <PokemonCard color='#EEDEAB' num={'N. ° ' + 2} nombre={pokemon}/>
    // <div className='pokeList'>
    //     {pokemon?.map(p=>(
    //         <div id={p.name} className='marcaje'>
                
    //         </div>
    //     ))}
    // </div>
  )
}

export default PokeList