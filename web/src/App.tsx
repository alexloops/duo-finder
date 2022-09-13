import logo from "./assets/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center max-w-[1344px] w-full h-screen">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black m-20">
        {" "}
        Your <ColorfulText>duo</ColorfulText> is here
        <ColorfulText>.</ColorfulText>
      </h1>
      <div className="grid grid-cols-6 gap-6">
        <GameCard imgSrc="/game.png" gameName="Dota2" adAmount={4} />
        <GameCard imgSrc="/game.png" gameName="Dota2" adAmount={3} />
        <GameCard imgSrc="/game.png" gameName="Dota2" adAmount={4} />
        <GameCard imgSrc="/game.png" gameName="Dota2" adAmount={3} />
        <GameCard imgSrc="/game.png" gameName="Dota2" adAmount={4} />
        <GameCard imgSrc="/game.png" gameName="Dota2" adAmount={1} />
      </div>
      <div className="pt-1 mt-8 rounded-lg bg-gradient-to-r self-stretch from-[#9572FC] via-[#43E7AD] to-[#E2D45C]">
        <div className="flex justify-between items-center bg-[#2A2634] px-8 py-6 rounded-lg">
          <div>
            <strong className="text-2xl text-white font-black block">
              Couldn't find a duo?
            </strong>
            <span className="block text-zinc-400 mt-1">
              Create your own ad to find new gaming partners.
            </span>
          </div>
          <button className="flex items-center gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded">
            <MagnifyingGlassPlus size={22} />
            Create ad
          </button>
        </div>
      </div>
    </div>
  );
}

const ColorfulText = ({ children }: { children: string }) => {
  return (
    <span className="bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C] bg-clip-text text-transparent">
      {children}
    </span>
  );
};

interface GameCardProps {
  imgSrc: string;
  gameName: string;
  adAmount: number;
}

const GameCard = (props: GameCardProps) => {
  const { imgSrc, gameName, adAmount } = props;
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={imgSrc} />
      <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-gradient-to-b from-transparent to-black">
        <strong className="font-bold text-white">{gameName}</strong>
        <span className="block text-zinc-300 text-sm">
          {adAmount > 1 ? `${adAmount} ads` : `${adAmount} ad`}
        </span>
      </div>
    </a>
  );
};

export default App;
