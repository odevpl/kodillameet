import { useState } from "react"; 

const CalendarBox = () => {
  
    return ( 
        <div className="calendar-container">
            <h1>Kalendarz</h1>
            <div className="underline"></div>
            <div className="calendar-content">
                <h1>Okres czasu: 14.11 - 20.11 (46)</h1>
                <div className="calendar-days">
                    <div className="day-column">
                        <h2>Poniedziałek</h2>
                        <div className="hour"><p>7:00</p></div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                    <div className="day-column">
                        <h2>Wtorek</h2>
                        <div className="hour">7:00</div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                    <div className="day-column">
                        <h2>Środa</h2>
                        <div className="hour">7:00</div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                    <div className="day-column">
                        <h2>Czwartek</h2>
                        <div className="hour">7:00</div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                    <div className="day-column">
                        <h2>Piątek</h2>
                        <div className="hour">7:00</div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                    <div className="day-column">
                        <h2>Sobota</h2>
                        <div className="hour">7:00</div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                    <div className="day-column">
                        <h2>Niedziela</h2>
                        <div className="hour">7:00</div>
                        <div className="hour">7:45</div>
                        <div className="hour">8:30</div>
                        <div className="hour">9:15</div>
                        <div className="hour">10:00</div>
                        <div className="hour">10:45</div>
                        <div className="hour">11:30</div>
                        <div className="hour">12:15</div>
                        <div className="hour">13:00</div>
                        <div className="hour">13:45</div>
                        <div className="hour">14:30</div>
                        <div className="hour">15:15</div>
                        <div className="hour">16:00</div>
                        <div className="hour">16:45</div>
                        <div className="hour">17:30</div>
                        <div className="hour">18:15</div>
                        <div className="hour">19:00</div>
                        <div className="hour">19:45</div>
                        <div className="hour">20:30</div>
                        <div className="hour">21:15</div>
                        <div className="hour">20:00</div>
                    </div>
                </div>
                <button>Zapisz tydzień</button>
            </div>
        </div>
    )
}

export default CalendarBox;






