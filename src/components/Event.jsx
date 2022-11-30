import {format, parseISO} from "date-fns";
import React, {useState} from "react";
import EventModal from "./EventModal";

const Event = ({e, today}) => {
  const [eventModalOpen, setEventModalOpen] = useState(false);

  return (
    <React.Fragment>
      <div
        className={
          parseISO(e.startDateTime, new Date()) >= today
            ? "bg-gray-200 p-2 rounded sm:text-[8px] md:text-[10px] xl:text-[12px] cursor-pointer w-[100%]"
            : "bg-gray-400 p-2 rounded sm:text-[8px] md:text-[10px] xl:text-[12px] cursor-pointer w-[100%]"
        }
        onClick={() => setEventModalOpen(!eventModalOpen)}
      >
        <h4
          className={
            parseISO(e.startDateTime, new Date()) < today ? "line-through" : ""
          }
        >
          {format(parseISO(e.startDateTime, new Date()), "hh:mm")}-
          {format(parseISO(e.endDateTime, new Date()), "hh:mm")}
        </h4>
        <h4>{e.title}</h4>
      </div>
      <div className={eventModalOpen ? "" : "hidden"}>
        <EventModal
          e={e}
          eventModalOpen={eventModalOpen}
          setEventModalOpen={setEventModalOpen}
          today={today}
        />
      </div>
    </React.Fragment>
  );
};
export default Event;
