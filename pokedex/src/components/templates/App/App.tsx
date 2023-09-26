import "./App.css";
import SquareImg from "../../atoms/SquareImg/SquareImg";
import PokeNav from "../../organisms/PokeNav/PokeNav";
import LeftImg from "../../atoms/LeftImg/LeftImg";
import PokeList from "../../organisms/PokeList/PokeList";
import { useState, useEffect } from "react";
import { ImageProvider } from "../../Context/ImgContext";

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://www.pngmart.com/files/12/Charizard-PNG-Free-Download.png"
  );
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

    const res = await fetch(`${baseURL}`);
    const data = await res.json();

    const promise = data.results.map(
      async (pokemon: { url: RequestInfo | URL }) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      }
    );

    const results = await Promise.all(promise);

    setAllPokemons(results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <header>
        <PokeNav />
      </header>

      <hr
        style={{
          backgroundColor: "#3D3635",
          height: 10,
          borderBlockColor: "transparent",
        }}
      />

      <main className="app">
        <div className="app-row">
          <LeftImg />
        </div>
        <ImageProvider>
          <div className="app-row">
            <SquareImg img={imageUrl} />
          </div>

          <div className="app-row">
            <PokeList pokemon={allPokemons} />
          </div>
        </ImageProvider>
      </main>
    </>
  );
}

export default App;
