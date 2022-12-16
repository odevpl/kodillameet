import { createContext } from "react";
import { hoursData } from "./state";
import { calendarData } from "./calendarData";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {

    // place for hooks, state, functions, etc

    return (
        <CalendarContext.Provider value ={{ hoursData, calendarData }}>{children}</CalendarContext.Provider>
    );
};

export default CalendarContext;