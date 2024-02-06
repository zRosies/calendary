"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/red.css";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { CiCalendarDate } from "react-icons/ci";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const RusselCalendar = () => {
  const today = new Date();
  const aftermorrow = new Date();

  aftermorrow.setDate(today.getDate() + 1).toString();

  const [values, setValues] = useState<any>([]);

  useEffect(() => {
    const selectedDate = values.map((dateObject: any) => {
      const date = new Date(dateObject); // Convert to Date object if it's not already
      const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      return formattedDate;
    });
    console.log(selectedDate);
  }, [values]);

  return (
    <>
      <DatePicker
        value={values}
        minDate={aftermorrow.toDateString()}
        onChange={setValues}
        multiple
        className="red"
        locale={pt_br}
        render={<InputIcon />}
        // plugins={[<DatePanel key={""} sort="date" />]}
      />
    </>
  );
};

console.log();

export default RusselCalendar;

export const pt_br = {
  name: "gregorian_en_lowercase",
  months: [
    ["Janeiro", "jan"],
    ["Fevereiro", "fev"],
    ["Março", "mar"],
    ["Abril", "abr"],
    ["Maio", "mai"],
    ["Junho", "jun"],
    ["Julho", "jul"],
    ["Agosto", "ago"],
    ["Setembro", "set"],
    ["Outubro", "out"],
    ["Novembro", "nov"],
    ["D ezembro", "dez"],
  ],
  weekDays: [
    ["sábado", "sáb"],
    ["domingo", "dom"],
    ["segunda", "seg"],
    ["terça", "ter"],
    ["quarta", "qua"],
    ["quinta", "qui"],
    ["sexta", "sex"],
  ],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  meridiems: [
    ["AM", "am"],
    ["PM", "pm"],
  ],
};
