import React, {useState} from "react";
import SideBar from "../../components/SideBar";
import {
  format,
  startOfToday,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  parse,
  add,
} from "date-fns";
import Header from "../../components/Header";
import DaysInMonth from "../../components/DaysInMonth";

const AgendaPage = () => {
  let today = startOfToday();
  const [curruntMonth, setCurrntMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(curruntMonth, "MMM-yyyy", new Date());

  let newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  /*
  const [years, setYears] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("years")) ?? [];
    } catch {
      console.log("cart could not be parsed into json ");
      return [];
    }
  });

  useEffect(
    () => localStorage.setItem("years", JSON.stringify(years)),
    [years]
  );

   const addEvent = name => {
    setYears(year => {
      return {...year, mounths: [...year.mounths, {name}]};
    });
  }; */

  const nextMonth = () => {
    const firstDayNexttMonth = add(firstDayCurrentMonth, {months: 1});
    setCurrntMonth(format(firstDayNexttMonth, "MMM-yyyy"));
  };
  const previosMonth = () => {
    const firstDayPreviostMonth = add(firstDayCurrentMonth, {months: -1});
    setCurrntMonth(format(firstDayPreviostMonth, "MMM-yyyy"));
  };
  const [selectedToday, setSelectToday] = useState(false);

  return (
    <div className="flex bg-[#2D224C]">
      <SideBar />
      <div className="bg-[#2D224C] p-4 flex flex-col justify-center iteme-center content-center w-[100%]">
        <Header
          firstDayCurrentMonth={firstDayCurrentMonth}
          nextMonth={nextMonth}
          previosMonth={previosMonth}
          setSelectToday={setSelectToday}
          selectedToday={selectedToday}
        />
        <DaysInMonth
          newDays={newDays}
          today={today}
          selectedToday={selectedToday}
          firstDayCurrentMonth={firstDayCurrentMonth}
        />
      </div>
    </div>
  );
};

export default AgendaPage;
