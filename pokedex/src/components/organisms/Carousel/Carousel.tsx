import "./Carousel.css";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import React, { useState } from "react";
import { useImage } from "../../Context/ImgContext";

const MAX_VISIBILITY = 3;

const Carousel = ({ children }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);
  const { cambiarImagen } = useImage();

  const leftClick = () => {
    setActive((i) => i - 1);
    cambiarImagen(children[active - 1].props.children.props.img);
  };

  const rightClick = () => {
    setActive((i) => i + 1);
    cambiarImagen(children[active + 1].props.children.props.img);
  };

  return (
    <div className="carousel">
      {active >= 0 && <button className='nav left' onClick={leftClick}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active <= count - 1 && <button className='nav right' onClick={rightClick}><TiChevronRightOutline/></button>}
    </div>
  );
};

export default Carousel;
