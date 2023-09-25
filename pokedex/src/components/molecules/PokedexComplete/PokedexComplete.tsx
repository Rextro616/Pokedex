import './PokedexComplete.css'
import PokeTitle from '../../atoms/PokeTitle/PokeTitle'
import PokeParagraph from '../../atoms/PokeParagraph/PokeParagraph'
import PokeballImg2 from "../../../assets/Component 9Pokeball.png";
import Pokeball from '../../atoms/Pokeball/Pokeball';


function PokedexComplete() {

  return (
    <>
      <div className="pokedex-complete">
          <PokeTitle justify="space-between" color="#1C2D73">
          <Pokeball img={PokeballImg2}/>
            <PokeParagraph text="152" />
          </PokeTitle>

          <PokeTitle justify="space-between" color="#1C2D73">
          <Pokeball img={PokeballImg2}/>
            <PokeParagraph text="152" />
          </PokeTitle>
        </div>
    </>
  )
}

export default PokedexComplete