import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";
import { useState } from "react";
import { useCallback } from "react";

const CalendarBox = () => {
  
    const { calendarData } = useContext(CalendarContext);

    const [reservedHour, setReservedHour] = useState('');
    const [reservedDay, setReservedDay] = useState('');

    const handleSetReservedDay = (e, day) => {
        e.preventDefault()
        setReservedDay(day)
    }

    const handleSetReservedHour = (e, hour) => {
        e.preventDefault()
        setReservedHour(hour)
    }

    console.log('reserved day is ', reservedDay)
    console.log('reserved hour is ', reservedHour)

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
                            {item.hours.map((hour, hourIndex) => 
                                <div 
                                    key={hourIndex} 
                                    onClick={(e) => {
                                        handleSetReservedDay(e, item.dayName)
                                        handleSetReservedHour(e, hour)
                                    }}  
                                    className=   
                                    {`hour ${
                                        reservedHour === hour && 
                                        reservedDay === item.dayName
                                        ? "active" : ""}`}       
                                >{hour}
                                </div>       
                            )}
                        </div>
                    )}  
                </div>
                <button>Zapisz tydzień</button>
            </div>
        </div>
    )
}

export default CalendarBox;






