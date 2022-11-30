import Day from "./Day";

const DaysInMonth = ({newDays, today, selectedToday, firstDayCurrentMonth}) => {
  return (
    <div className="grid grid-cols-7 gap-[4px] content-center">
      {newDays.map((day, dayIndex) => (
        <Day
          day={day}
          key={dayIndex}
          today={today}
          dayIndex={dayIndex}
          selectedToday={selectedToday}
          firstDayCurrentMonth={firstDayCurrentMonth}
        />
      ))}
    </div>
  );
};

export default DaysInMonth;
