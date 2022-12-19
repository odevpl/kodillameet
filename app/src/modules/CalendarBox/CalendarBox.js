import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";
import { useState } from "react";

const CalendarBox = () => {
  
    const { calendarData, updateIsSelected } = useContext(CalendarContext);

    const [ day, setDay ] = useState('');
    const [ hour, setHour ] = useState('');
    const [ hourId, setHourId ] = useState('');
    const [ isSelected, setIsSelected ] = useState(false);

    const handleHourClick = (e, day, hour, hourId) => {
        e.preventDefault();
        setDay(day)
        setHour(hour)
        setHourId(hourId)
        setIsSelected(!isSelected)
        updateIsSelected(day, hourId, isSelected)
    }

    /*
    console.log('isSelected is ', isSelected)
    console.log('day is', day)
    console.log('hour is', hour)
    console.log('hourId is', hourId)
    */

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
                                <button 
                                    key={hourIndex}
                                    onClick={(e) => {
                                        handleHourClick(e, item.dayName, hour.hour, hour.hourId)
                                    }}
                                    className=   
                                    {`hour ${
                                        day === item.dayName &&
                                        hourId === hour.hourId &&
                                        isSelected
                                        ? "active" : ""}`} 
                                    >{hour.hour}
                                </button>           
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






