import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";
import { useState } from "react";

const CalendarBox = () => {
  
    const { calendarData } = useContext(CalendarContext);

    const [active, setActive] = useState([])

    console.log('active is', active)

    return ( 
        <div className="calendar-container">
            <h1>Kalendarz</h1>
            <div className="underline"></div>
            <div className="calendar-content">
                <h1>Okres czasu: 14.11 - 20.11 (46)</h1>
                <div className="calendar-days"> 
                    
                    {calendarData.map((item, weekIndex) => 
                        <div className="day-column" >
                            <h2 key={weekIndex}>{item.dayName}</h2>
                            {item.hours.map((button, dayIndex) => {
                                const isActive = active.includes(button)
                                return (
                                    <button
                                        key={dayIndex}
                                        onClick={() => setActive(isActive
                                        ? active.filter(current => current !== button)
                                        : [...active, button])}
                                        
                                        className={`
                                            hour 
                                            ${ isActive || button.isSelected ? "active" : "" }
                                            ${ button.isReserved ? "reserved" : ""}
                                        `}  
                                    >
                                        {button.hour} {button.reserving}
                                    </button>
                                )
                            })}
                        </div>
                    )}  
                </div>
                <button>Zapisz tydzień</button>
            </div>
        </div>
    )
}

export default CalendarBox;






