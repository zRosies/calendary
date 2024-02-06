import Image from "next/image";
import HomePage from "./homepage";
import { LoadBarAnimation } from "./component/loadAnimation";
import DynamicCalendar from "./component/dynamicCalendar";
import Calendar from "./component/russelCalendar";

export default function Home() {
  return (
    <>
      <section className="mt-5">
        <LoadBarAnimation />
        {/* <DynamicCalendar /> */}

        <Calendar />
      </section>
    </>
  );
}
