import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";
import { useState } from "react";

const CalendarBox = (props) => {
  
    const { dayNames, hours } = useContext(CalendarContext);

    console.log('hours is', hours)

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
                    
                    {dayNames.map((item, dayIndex) => 
                        <div className="day-column" >
                            <h2 key={dayIndex}>{item.longName}</h2>
                            {hours.map((hour, hourIndex) => {
                                const isActive = active.includes(hour)
                                return (
                                    <button
                                        key={hourIndex}
                                        onClick={() => setActive(isActive
                                        ? active.filter(current => current !== hour)
                                        : [...active, hour])}
                                        
                                        className={`
                                            hour 
                                            ${ isActive && dayIndex === 0 ? "active" : "" }
                                            ${ hour.isReserved ? "reserved" : ""}
                                        `}  
                                    >
                                        {hour} 
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






