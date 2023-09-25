import './SquareImg.css'

function SquareImg(props: { img: string | undefined }) {

  return (
    <>
      <div className='squareImg'>
        <img src={props.img} alt="" />
      </div>
    </>
  )
}

export default SquareImg