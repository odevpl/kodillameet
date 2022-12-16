import { createContext } from "react";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {

    // place for hooks, state, functions, etc

    return (
        <CalendarContext.Provider value ={{ item: 1 }}>{children}</CalendarContext.Provider>
    );
};

export default CalendarContext;