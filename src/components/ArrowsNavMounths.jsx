const ArrowsNavMounths = ({nextMonth, previosMonth}) => {
  return (
    <div className="flex justify-center gap-6 text-white font-bold text-3xl">
      <button onClick={previosMonth}>{"<"} </button>
      <button onClick={nextMonth}>{">"}</button>
    </div>
  );
};

export default ArrowsNavMounths;
