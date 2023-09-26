import React from 'react'
import './Stats.css'
import PokeParagraph from '../PokeParagraph/PokeParagraph'

export default function Stats(prop) {
  return (
    <div style={{backgroundColor: prop.color}} className='stats'>
        <PokeParagraph text={prop.stat}/>
    </div>
  )
}
