import { createContext } from "react";
import { calendarData } from "./calendarData";
import { useState } from "react";

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {

    const [items, setItems] = useState({ calendarData })
    
    const updateIsSelected = (day, hourId, isSelected) => {
        console.log('hour in provider is', hourId)
        
    }

    console.log('calendarDtaa is', items)


    // place for hooks, state, functions, etc

    return (
        <CalendarContext.Provider value ={{ calendarData, updateIsSelected }}>{children}</CalendarContext.Provider>
    );
};

export default CalendarContext;