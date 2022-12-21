import { createContext } from "react";
import { calendarData } from "./calendarData";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
    
    // place for hooks, state, functions, etc

    return (
        <CalendarContext.Provider value ={{ calendarData }}>{children}</CalendarContext.Provider>
    );
};

export default CalendarContext;