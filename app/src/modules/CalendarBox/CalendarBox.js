import { dayNames, hours } from "./../../const/dates/dates";
import { useState } from "react";

const CalendarBox = (props) => {

    const [active, setActive] = useState([
        {
            dayId: 1,
            hour: '8:30',
            user: 'Tomasz Karolak'
        }
    ])

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

                                const isActive = active.find(act => act.hour === hour.hour && act.dayId === dayIndex)

                                return (
                                    <button
                                        key={hourIndex}
                                        onClick={() => setActive(isActive
                                        ? active.filter((current) => current.hour !== hour.hour || current.dayId !== dayIndex)
                                        : [...active, {hour: hour.hour, hourId: hourIndex, dayId: dayIndex, user: ''}])}
                                        className={`
                                            hour
                                            ${ isActive ? "active" : "" }
                                            ${ hour.user ? "reserved" : ""}
                                        `}  
                                    >
                                        {hour.hour}{hour.user}
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






