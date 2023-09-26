import SquareImg from "../../atoms/SquareImg/SquareImg";
import "./Modal.css";
import PokemonCard from "../../molecules/PokemonCard/PokemonCard";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#5694D7",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose, pokemon }) {
  console.log(pokemon);
  if (!open) return true;

  return (
    <div style={OVERLAY_STYLES}>
      <div className="styles" onClick={onClose}>
        {children}
        <SquareImg img={pokemon.sprites.front_default} />
        <PokemonCard
          num={"N. ° " + pokemon.id}
          nombre={pokemon.name}
          img={pokemon.sprites.front_default}
          color="#E99441"
        />
      </div>
    </div>
  );
}
