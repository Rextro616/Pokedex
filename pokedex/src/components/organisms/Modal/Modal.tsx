import SquareImg from "../../atoms/SquareImg/SquareImg";
import "./Modal.css";
import PokemonCard from "../../molecules/PokemonCard/PokemonCard";
import PokeParagraph from "../../atoms/PokeParagraph/PokeParagraph";
import Stats from "../../atoms/Stats/Stats";

const OVERLAY_STYLES = {
  display: "grid",
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
  if (!open) return null;

  return (
    <div style={OVERLAY_STYLES}>
      <div className="styles" onClick={onClose}>
        {children}
        <SquareImg img={pokemon.sprites.front_default} />
        <div className="row">
          <PokemonCard
            num={"N. ° " + pokemon.id}
            nombre={pokemon.name}
            img={pokemon.sprites.front_default}
            color="#E99441"
          />
          <div className="name">
            <PokeParagraph text="Pedrito" />
          </div>

          <div className="caracteristics">
            <div className="circle" />

            <div>
              <div className="tipos">
                <Stats color="#6ABBE6" stat="Types" />
                {pokemon.types.map((p) => (
                  <div className="centrado">
                    <PokeParagraph text={p.type.name}/>
                  </div>
                ))}
              </div>
              <div className="tipos">
                <Stats color="#6ABBE6" stat="Height" />
                  <div className="centrado">
                    <PokeParagraph text={pokemon.height + " m"}/>
                  </div>
              </div>
              <div className="tipos">
                <Stats color="#6ABBE6" stat="Weight" />
                  <div className="centrado">
                    <PokeParagraph text={pokemon.weight + " kg"}/>
                  </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
