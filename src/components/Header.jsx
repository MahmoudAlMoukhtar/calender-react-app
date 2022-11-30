import {format} from "date-fns";
import ArrowsNavMounths from "./ArrowsNavMounths";

const Header = ({
  firstDayCurrentMonth,
  nextMonth,
  previosMonth,
  setSelectToday,
  selectedToday,
}) => {
  return (
    <header className="flex flex-col items-start gap-4">
      <div className="flex justify-start items-center flex-wrap md:flex-nowrap gap-6 w-[100%]">
        <h1 className="text-center text-white font-bold text-4xl my-4 w-80 flex-2">
          {format(firstDayCurrentMonth, "MMMM-yyyy")}
        </h1>
        <ArrowsNavMounths nextMonth={nextMonth} previosMonth={previosMonth} />
        <div className="flex justify-start items-center flex-wrap gap-2 w-[100%]">
          <button
            className={
              selectedToday
                ? "bg-purple-200 h-8 px-6 text-black font-semibold rounded ring-2 ring-[#be185d] ring-offset-2"
                : "bg-purple-200 h-8 px-6 text-black font-semibold rounded"
            }
            onClick={() => setSelectToday(!selectedToday)}
          >
            Today
          </button>
          <button className="bg-purple-200 h-8 px-6 text-black font-semibold rounded">
            GMT +02:00
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 my-4 text-sm gap-5 leading-6 text-center text-white font-semibold">
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Sunday
        </h5>
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Monday
        </h5>
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Tuesday
        </h5>
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Wednesday
        </h5>
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Thursday
        </h5>
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Friday
        </h5>
        <h5 className="w-[60px] sm:w-[100px] lg:w-[150px] xl:w-[160px] nameDay">
          Saturday
        </h5>
      </div>
    </header>
  );
};

export default Header;
