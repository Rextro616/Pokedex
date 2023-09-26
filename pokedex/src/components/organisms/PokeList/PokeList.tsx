import "./PokeList.css";
import PokemonCard from "../../molecules/PokemonCard/PokemonCard";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";

function PokeList(pokemon: { pokemon: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  let [pokemonChosed, setpokemonChosed] = useState();

  return (
    <div id="pokeList" className="pokeList">
      <Carousel>
        {pokemon.pokemon.map((p) => (
          <div
            id={p.name}
            onClick={() => {
              setIsOpen(true);
              setpokemonChosed(p);
            }}
            className="pokeCarousel"
          >
            <PokemonCard
              img={p.sprites.front_default}
              color="#EEDEAB"
              num={"N. ° " + p.id}
              nombre={p.name}
            />
          </div>
        ))}
      </Carousel>

      <Modal
        pokemon={pokemonChosed}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></Modal>
    </div>
  );
}

export default PokeList;
