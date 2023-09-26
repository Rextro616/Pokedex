import './PokemonCard.css'
import PokeParagraph from '../../atoms/PokeParagraph/PokeParagraph'
import Pokeball from '../../atoms/Pokeball/Pokeball'
import Img from '../../../assets/Component 9Pokeball.png'

function PokemonCard(props: { color: string | undefined, nombre: string | undefined, num: string | undefined, img : string | undefined }) {

  return (
    <>
      <div id={props.num} className='pokemonCard' style={{backgroundColor: props.color}}>
        <Pokeball img={Img} />
        <img src={props.img} alt={props.nombre}/>
        <PokeParagraph text={props.num}/>
        <PokeParagraph text={props.nombre}/>
      </div>
    </>
  )
}

export default PokemonCard