import { dayNames, hours } from "../../const/dates/dates";
import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";

const CalendarAdmin = ({openModal}) => {

    const { active, setActive, sorted } = useContext(CalendarContext)

    const date = new Date().toLocaleDateString();
    console.log('date is ', date)
    

    return ( 

        <>
        <div className="calendar-container">
            <div className="calendar-header">
                <div className="calendar-header-left">
                    <h1>Kalendarz</h1>
                    <div className="underline"></div>
                </div>
                <div className="calendar-header-right">
                    <button onClick={openModal}>Dodaj tydzień</button>
                    <button onClick={openModal}>Dodaj kursanta</button>
                    <button onClick={openModal}>Umów kursanta</button>
                    <button onClick={openModal}>Pokaz logi</button>
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
                                        onClick={
                                            
                                            () => setActive(isActive
                                        ? active.filter((current) => current.hour !== hour.hour || current.dayId !== dayIndex)
                                        : [...active, {dayId: dayIndex, hourId: hourIndex, hour: hour.hour }])
                                    
                                    }
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
                <button>Zapisz tydzień</button>
            </div>
        </div>

        </>
    )
}

export default CalendarAdmin;






