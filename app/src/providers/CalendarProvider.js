import { createContext } from "react";
import { dayNames, hours } from "./../const/dates/dates"

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
    
    // place for hooks, state, functions, etc

    return (
        <CalendarContext.Provider value ={{ dayNames, hours }}>{children}</CalendarContext.Provider>
    );
};

export default CalendarContext;