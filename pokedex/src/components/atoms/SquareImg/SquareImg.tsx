import "./SquareImg.css";
import { useImage } from "../../Context/ImgContext";

function SquareImg(props: { img: string | undefined }) {
  const { imageUrl } = useImage();
  return (
    <>
      <div className="squareImg">
        <img src={imageUrl} alt="pokemon" />
      </div>
    </>
  );
}

export default SquareImg;
