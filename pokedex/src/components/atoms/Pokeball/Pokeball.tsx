import './Pokeball.css'

function Pokeball(prop: { img: string | undefined }) {

  return (
    <>
      <img src={prop.img} alt='pokeball' className='pokeball'>
      </img>
    </>
  )
}

export default Pokeball