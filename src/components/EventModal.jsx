import {format, intervalToDuration, parseISO} from "date-fns";
import React from "react";
import {Link} from "react-router-dom";

const EventModal = ({e, setEventModalOpen, today}) => {
  const color =
    parseISO(e.startDateTime, new Date()) >= today ? "#D4145A" : "#8065C9";

  const resulteDuration = intervalToDuration({
    start: parseISO(e.startDateTime, new Date()),
    end: parseISO(e.endDateTime, new Date()),
  });
  console.log(resulteDuration);
  return (
    <div
      id="#Modal"
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex w-[100%] min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-8 w-[100%] relative flex flex-col justify-center items-start transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[500px]">
            <div className="text-center sm:text-left w-[100%]">
              <div className="flex justify-between w-[100%] gap-8">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-[#2D224C]">
                    {e.title}
                  </h2>
                  <h3 className="text-sm">Topic: {e.topic}</h3>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    id="img-modal"
                    src={e.img}
                    alt={e.name}
                    className="w-[50px] h-[50px] rounded-[68px]"
                  />
                  <h3
                    className="text-md leading-6 text-[#2D224C] font-semibold"
                    id="modal-title"
                  >
                    {e.name}
                  </h3>
                </div>
              </div>
              <div className="mt-8 flex justify-between w-[100%]">
                <div className="flex flex-col gap-2">
                  <h6>Date</h6>
                  <p className={`text-sm text-[${color}] font-semibold`}>
                    {format(
                      parseISO(e.startDateTime, new Date()),
                      "MMM-yyyy-dd-hh:mm a"
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6>Time</h6>
                  <p className={`text-sm text-[${color}] font-semibold`}>
                    {format(parseISO(e.startDateTime, new Date()), "hh:mm a")}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h6>Duration</h6>
                  <p className={`text-sm text-[${color}] font-semibold`}>
                    {resulteDuration.hours}:{resulteDuration.minutes}
                  </p>
                </div>
              </div>
            </div>
            {parseISO(e.startDateTime, new Date()) >= today ? (
              <React.Fragment>
                <button
                  type="button"
                  className=" w-[100%]  rounded-md border border-transparent bg-[#D4145A] px-4 py-2 text-base font-semiBold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm my-4"
                  onClick={() => setEventModalOpen(false)}
                >
                  JOIN
                </button>
                <div className="flex justify-between gap-6 w-[100%]">
                  <h6 className="font-semibold">Material:</h6>
                  <div className="flex flex-col gap-2">
                    <Link className="underline  underline-offset-1">
                      Video Listening Introduzion
                    </Link>
                    <Link className="underline  underline-offset-1">
                      Video Listening Introduzion
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button
                  type="button"
                  className="w-[100%] rounded-md border border-transparent bg-[#8065C9] w-[100%] px-4 py-2 text-base font-semiBold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2  sm:text-sm my-4"
                  onClick={() => setEventModalOpen(false)}
                >
                  WATCH RECORDING
                </button>
                <div className="flex justify-between gap-6 w-[100%]">
                  <h6 className="font-semibold">Material:</h6>

                  <Link className="underline  underline-offset-1">
                    Leasone recap
                  </Link>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
