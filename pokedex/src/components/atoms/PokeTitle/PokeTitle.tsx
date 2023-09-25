import './PokeTitle.css'

function PokeTitle({children, justify , color} : any) {
  return (
    <>
      <div className='pokeTitle' style={{backgroundColor: color, justifyContent: justify}}>
        {children}
      </div>
    </>
  )
}

export default PokeTitle