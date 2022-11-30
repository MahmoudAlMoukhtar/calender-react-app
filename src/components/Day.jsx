import Event from "./Event";
import {
  isToday,
  isSameMonth,
  format,
  getDay,
  isSameDay,
  parseISO,
} from "date-fns";

const meeting = [
  {
    id: 1,
    title: "Speaking class",
    img: "https://s3-alpha-sig.figma.com/img/509c/c77b/f8b5970659b9cbb50cddca1f45943d16?Expires=1670803200&Signature=a-qiCWKnMSRtbGa1-VT~UYY6-bMhf0BFwGHNn3ZFxyVmRnqCz2cw9g5wFSSul9dUbSuepe~7d7wefvDqpnVKNpAHTSkcsqdoD7cCQYvq4AeSoIQM7~-VJUocP6--h~Se7vqSk3zNaajEY9yLCi0tzxjq3mLp6B0xw~LhzsKNmWBccqYEAeNdhobIaY9Xj1g8YhcI1AGVJqNkQZZR1hnwEX7bsR2vxlSRHpw1RSHZpDO27VfGU7hUFJn6rSeUBp9N2kugvKOIS8gpx25H3S~eNpFtwkEzW6xU2lYGgVhwUyBsULFV3Y6J2cTjJmN9kwDetfo8LV~4yEooZw~117gO9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    name: "Liam",
    startDateTime: "2022-11-29T06:00:00.015Z",
    endDateTime: "2022-11-29T09:45:00.015Z",

    duration: "00:45",
    topic: "Hoppiness",
  },
  {
    id: 1,
    title: "Speaking class",
    img: "/images/IMG_20220917_142002_553 - Copy.jpg",
    name: "Mahmoud",
    startDateTime: "2022-11-02T09:00:00.015Z",
    endDateTime: "2022-11-02T10:45:00.015Z",
    duration: "00:45",
    topic: "Hoppiness",
  },
  {
    id: 1,
    title: "Speaking class",
    img: "/images/IMG_20220917_142002_553 - Copy.jpg",
    name: "Mahmoud",
    startDateTime: "2022-11-30T06:06:00.015Z",
    endDateTime: "2022-11-30T09:45:00.015Z",

    duration: "00:45",
    topic: "Hoppiness",
  },
];
const Day = ({day, today, dayIndex, selectedToday, firstDayCurrentMonth}) => {
  console.log(parseISO(meeting[0].startDateTime, new Date()));
  console.log(day);
  console.log(selectedToday);

  return (
    <div
      className={
        dayIndex === 0
          ? "Day-box w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[150px] lg:h-[150px] xl:w-[160px] lg:h-[160px]  flex flex-col justify-start items-center gap-[2px] rounded bg-white " +
            colStartClasses[getDay(day)]
          : "Day-box w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[150px] lg:h-[150px] xl:w-[160px] lg:h-[160px]  flex flex-col justify-start items-center gap-[2px] rounded bg-white"
      }
      style={
        selectedToday && isToday(day)
          ? {"border-width": "8px", "border-color": "#be185d"}
          : {}
      }
    >
      <div
        className={isSameMonth(day, today) ? "text-black" : "text-gray-300"}
        dateTime={format(day, "yyyy-MM-dd")}
      >
        <span
          className={
            isToday(day)
              ? "text-white bg-[#be185d] rounded-full font-bold"
              : isSameMonth(day, today)
              ? "text-[#2D224C] font-bold"
              : "text-gray-400 font-semibold"
          }
        >
          {format(day, "d")}
          {format(day, "d") === "1" &&
            "-" + format(firstDayCurrentMonth, "MMM")}
        </span>
      </div>
      <div>
        {meeting
          .filter(e => isSameDay(parseISO(e.startDateTime, new Date()), day))
          .map(e => (
            <Event e={e} today={today} />
          ))}
      </div>
    </div>
  );
};

export default Day;

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
