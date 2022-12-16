import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";

const CalendarBox = () => {
  
    const { calendarData } = useContext(CalendarContext);

    const weekList = calendarData.map((item, weekIndex) => 
        <div className="day-column">
            <h2 key={weekIndex}>{item.day}</h2>
            
            {item.hours.map((hour, hourIndex) => 
                <div key={hourIndex} className="hour">{hour}
                </div>         
            )}
        </div>
    )
    
    return ( 
        <div className="calendar-container">
            <h1>Kalendarz</h1>
            <div className="underline"></div>
            <div className="calendar-content">
                <h1>Okres czasu: 14.11 - 20.11 (46)</h1>
                <div className="calendar-days"> 
                    {weekList}  
                </div>
                <button>Zapisz tydzień</button>
            </div>
        </div>
    )
}

export default CalendarBox;






