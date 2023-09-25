import './PokeParagraph.css'

function PokeParagraph(props: { text: string | undefined }) {

  return (
    <div className='pokeParagraph'>
        {props.text} 
    </div>
  )
}

export default PokeParagraph