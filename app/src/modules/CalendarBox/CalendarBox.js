import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";
import { useState } from "react";

const CalendarBox = (props) => {
  
    const { calendarData } = useContext(CalendarContext);

    const [active, setActive] = useState([])

    console.log('active is', active)

    return ( 
        <div className="calendar-container">
            
            <div className="calendar-header">
                <div className="calendar-header-left">
                    <h1>Kalendarz</h1>
                    <div className="underline"></div>
                </div>
                <div className="calendar-header-right">
                    <button onClick={props.action}>Dodaj tydzień</button>
                    <button onClick={props.action}>Dodaj kursanta</button>
                    <button onClick={props.action}>Umów kursanta</button>
                    <button onClick={props.action}>Pokaz logi</button>
                </div>
            </div>

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






