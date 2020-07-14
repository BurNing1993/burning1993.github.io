import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const getTime = (date: Date = new Date()) => {
  const day = dayjs(date);
  const hh = day.hour();
  const mm = day.minute();
  return `${hh < 10 ? "0" + hh : hh} : ${mm < 10 ? "0" + mm : mm}`;
};

const Center = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(getTime());
    const timer = setInterval(() => {
      setTime(getTime())
    }, 60000);
    return ()=>clearInterval(timer);
  }, []);
  return <div className="center">{time}</div>;
};
export default Center;
