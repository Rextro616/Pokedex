import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImage = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  );

  const cambiarImagen = (nuevaUrl) => {
    setImageUrl(nuevaUrl);
  };

  return (
    <ImageContext.Provider value={{ imageUrl, cambiarImagen }}>
      {children}
    </ImageContext.Provider>
  );
};
