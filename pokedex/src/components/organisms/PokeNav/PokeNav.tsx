import "./PokeNav.css";
import PokeTitle from "../../atoms/PokeTitle/PokeTitle";
import Pokeball from "../../atoms/Pokeball/Pokeball";
import PokeballImg from "../../../assets/Component 10pokedex2.png";
import PokeParagraph from "../../atoms/PokeParagraph/PokeParagraph";
import PokedexComplete from "../../molecules/PokedexComplete/PokedexComplete";

function PokeNav() {
  return (
    <>
      <div className="pokeNav">
        <div className="nav-left">
          <PokeTitle justify="space-between" color="#8AD8F2">
            <Pokeball img={PokeballImg} />
            <PokeParagraph text="Pokedex" />
            <Pokeball img={PokeballImg} />
          </PokeTitle>

          <PokedexComplete />
        </div>

        <div className="nav-right">
          <PokeTitle justify="center" color="#3D72C0">
            <PokeParagraph text="Número" />
          </PokeTitle>
        </div>
      </div>
    </>
  );
}

export default PokeNav;
