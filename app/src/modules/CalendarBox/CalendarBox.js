import CalendarContext from "../../providers/CalendarProvider";
import { useContext } from "react";

const CalendarBox = () => {
  
    const { hoursData } = useContext(CalendarContext);

    const hoursList = hoursData.map((item, index) => 
        <div key={index} className="hour">{item}</div>
    );

    return ( 
        <div className="calendar-container">
            <h1>Kalendarz</h1>
            <div className="underline"></div>
            <div className="calendar-content">
                <h1>Okres czasu: 14.11 - 20.11 (46)</h1>
                <div className="calendar-days">
                    <div className="day-column">
                        <h2>Poniedziałek</h2>
                        {hoursList}
                    </div>
                    <div className="day-column">
                        <h2>Wtorek</h2>
                        {hoursList}
                    </div>
                    <div className="day-column">
                        <h2>Środa</h2>
                        {hoursList}
                    </div>
                    <div className="day-column">
                        <h2>Czwartek</h2>
                        {hoursList}
                    </div>
                    <div className="day-column">
                        <h2>Piątek</h2>
                        {hoursList}
                    </div>
                    <div className="day-column">
                        <h2>Sobota</h2>
                        {hoursList}
                    </div>
                    <div className="day-column">
                        <h2>Niedziela</h2>
                        {hoursList}
                    </div>
                </div>
                <button>Zapisz tydzień</button>
            </div>
        </div>
    )
}

export default CalendarBox;






