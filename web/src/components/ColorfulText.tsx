const ColorfulText = ({ children }: { children: string }) => {
  return (
    <span className="bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C] bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default ColorfulText;
