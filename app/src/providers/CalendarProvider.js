import { createContext } from "react";
import { useState } from "react";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
    
    const [active, setActive] = useState([])

    const sorted = [...active].sort((a, b) => {
        return a.hourId - b.hourId;
    });

    return (
        <CalendarContext.Provider 
            value ={{
                active, 
                setActive, 
                sorted}}
        >{children}
        </CalendarContext.Provider>
    );
};

export default CalendarContext;