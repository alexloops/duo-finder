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

export default GameCard;
