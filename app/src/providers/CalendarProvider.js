import { createContext } from "react";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
    
    return (
        <CalendarContext.Provider 
            value ={{}}
        >{children}
        </CalendarContext.Provider>
    );
};

export default CalendarContext;