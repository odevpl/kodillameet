import { createContext } from "react";
import { hoursData } from "./state";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {

    // place for hooks, state, functions, etc

    return (
        <CalendarContext.Provider value ={{ hoursData }}>{children}</CalendarContext.Provider>
    );
};

export default CalendarContext;