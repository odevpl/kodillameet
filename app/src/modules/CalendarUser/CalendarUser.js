import { dayNames } from "../../const/dates/dates";
import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";

const CalendarUser = () => {

    const { sorted } = useContext(CalendarContext);

    return ( 

        <div className="calendar-container">
            <div className="calendar-header">
                <div className="calendar-header-left">
                    <h1>Kalendarz</h1>
                    <div className="underline"></div>
                </div>
            </div>

            <div className="calendar-content">
                <h1>Okres czasu: 14.11 - 20.11 (46)</h1>
                <div className="calendar-days"> 
                    {dayNames.map((item, dayIndex) => 
                        <div className="day-column" >
                            <h2 key={dayIndex}>{item.longName}</h2>
                            {sorted.map((userHour, userHourIndex) => {
                                if(dayIndex === userHour.dayId)                            
                                return (
                                    <button
                                        key={userHourIndex}
                                        className="hour"
                                    >
                                        {userHour.hour}
                                    </button>                
                                )
                            }
                            )}
                        </div>
                    )}  
                    

                </div>
            </div>
        </div>
    )
}

export default CalendarUser;






