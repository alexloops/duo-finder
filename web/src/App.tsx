import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import GameCard from "./components/GameCard";
import CreateAdBanner from "./components/CreateAdBanner";
import ColorfulText from "./components/ColorfulText";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [gamesData, setGamesData] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => {
        setGamesData(data);
      });
  }, []);

  return (
    <div className="flex flex-col mx-auto px-6 items-center justify-center max-w-[1344px] w-full h-screen">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black m-20">
        {" "}
        Your <ColorfulText>duo</ColorfulText> is here
        <ColorfulText>.</ColorfulText>
      </h1>
      {gamesData.length > 0 && (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12 sm:mb-0">
          {gamesData.map((game: Game) => {
            return (
              <GameCard
                key={game.id}
                imgSrc={game.bannerUrl}
                gameName={game.title}
                adAmount={game._count.ads}
              />
            );
          })}
        </div>
      )}
      <CreateAdBanner games={gamesData} />
    </div>
  );
}

export default App;
