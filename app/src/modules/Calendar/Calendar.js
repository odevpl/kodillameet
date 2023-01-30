import { dayNames, hours } from "../../const/dates/dates";
import React, { useState } from "react";
import moment from 'moment'
import Modal from '../../modules/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';

const Calendar = ({openModal}) => {

    const [active, setActive] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [weekNumber, setWeekNumber] = useState('');
    const [modalState, setModalState] = useState(false);
    const [secondModalState, setSecondModalState] = useState(false);

    const uuid = uuidv4();
    const short_uuid = uuid.slice(0,8);
    const url = window.location.href;
    const editedurl = url.slice(0, -1);

    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        course: "",
        uuid: short_uuid
    })

    const date = new Date();  
    const currentYear = moment(date).format('Y');
    const currentWeek = moment(date).format('w');

    const sorted = [...active].sort((a, b) => {
        return a.hourId - b.hourId;
    });

    const addCalendar = () => {
        setShowCalendar(true);
    }

    const weekNumberChange = (event) => {
        setWeekNumber(event.target.value)
    }

    const getDateOfStartOfTheWeek = (weekNumber) => {
        let dates = new Date(currentYear, 0, (1 + (weekNumber - 1) * 7)); 
        dates.setDate(dates.getDate() + (1 - dates.getDay())); 
        return dates
    }

    const OpenModal = () => {
        setModalState(!modalState)
    }

    const handleUserFormChange = (e) => {
        setNewUser((prev) => ({...prev, [e.target.name]: e.target.value }))
    }

    const handleUserFormClick = e => {
        e.preventDefault()
        setSecondModalState(!secondModalState)
        setModalState(false)
    }

    const renderWeek = () => {
        return (
        <div className="calendar-content">
                <h1>Kalendarz 1</h1>
                <p>Numer tygodnia: {weekNumber}</p>
                <div className="calendar-days"> 
                    {dayNames.map((item, dayIndex) => 
                        <div className="day-column" >
                            <h2 key={dayIndex}>{item.longName}</h2>   
                            <h2>  
                                {moment(getDateOfStartOfTheWeek(weekNumber)).add(dayIndex, "day").format(`DD/MM/YYYY`)}
                            </h2>                           
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
                                        `}  
                                    >
                                        {hour.hour}
                                    </button>
                                )
                            })}
                        </div>
                    )}  
                </div>
                <button>Zapisz tydzień</button>
            </div>
        )
    }

    // views

    return ( 

        <>

        <div className="calendar-container">
            <div className="calendar-header">
                <div className="calendar-header-left">
                    <h1>Wybierz godziny i zapisz tydzień</h1>
                    <div className="underline"></div>
                </div>
                <div className="calendar-header-right">
                    { showCalendar === true ?
                        <button 
                            className="next-week-button" 
                            onClick={openModal}>
                                Dodaj kolejny tydzień
                        </button> :
                        <div />
                    }
                    <button onClick={OpenModal}>Dodaj kursanta</button>
                    <button onClick={openModal}>Umów kursanta</button>
                    <button onClick={openModal}>Pokaz logi</button>
                </div>
            </div>
                {showCalendar ? 
                    renderWeek() : 
                    <div className="calendar-content-message">
                        <h1>Brak aktywnych kalendarzy</h1>
                        <p>Numer aktualnego tygodnia to: {currentWeek}</p>
                        <p>Utwórz kalendarz dla tygodnia nr:  
                            <input
                                type="text"
                                name="weekNumber"
                                onChange={weekNumberChange}
                            /></p>
                        <button onClick={addCalendar}>Utwórz nowy</button>
                    </div>
                }
        </div>

        <div className="calendar-container">
            <div className="calendar-content">
                <h1>Gotowy kalendarz - widok admina</h1>
                <p>Nr tygodnia: {weekNumber}</p>
                <div className="calendar-days"> 
                    {dayNames.map((item, dayIndex) =>   
                        <div className="day-column" >
                            <h2 key={dayIndex}>{item.longName}</h2>
                            <h2>  
                                {moment(getDateOfStartOfTheWeek(weekNumber)).add(dayIndex, "day").format(`DD/MM/YYYY`)}
                            </h2>  
                            {sorted.map((userHour, userHourIndex) => {

                                const columnDate = moment(getDateOfStartOfTheWeek(weekNumber)).add(dayIndex, "day");
                                const finalDateToday = moment(new Date(date))
                                const finalColumnDate = moment(new Date(columnDate), "DD/MM/YYYY")

                                if(dayIndex === userHour.dayId)  

                                return (
                                    <button
                                        key={userHourIndex}
                                        className={`
                                            hour 
                                            ${ 
                                                finalColumnDate.diff(finalDateToday, "days") > -1 && 
                                                finalColumnDate.diff(finalDateToday, "days") < 2
                                                ? "active" : "" 
                                            }
                                            ${ userHour.user_type === "HTML" ? "reserved-html" : ""}
                                            ${ userHour.user_type === "Python" ? "reserved-python" : ""}
                                            
                                        `}  
                                        disabled={
                                            finalColumnDate.diff(finalDateToday, "days") > -3 && 
                                            finalColumnDate.diff(finalDateToday, "days") < 0 ||
                                            finalColumnDate.diff(finalDateToday, "days") > 1
                                        }
                                        
                                    >
                                        {userHour.hour} {userHour.user_name}
                                    </button>                
                                )
                            }
                            )}
                        </div>
                    )}  
                </div>
                <button>Zaktualizuj</button>
            </div>
        </div>

        <div className="calendar-container">
            <div className="calendar-content">
                <h1>Gotowy kalendarz - widok usera</h1>
                <p>Nr tygodnia: {weekNumber}</p>
                <div className="calendar-days"> 
                    {dayNames.map((item, dayIndex) =>   
                        <div className="day-column" >
                            <h2 key={dayIndex}>{item.longName}</h2>
                            <h2>  
                                {moment(getDateOfStartOfTheWeek(weekNumber)).add(dayIndex, "day").format(`DD/MM/YYYY`)}
                            </h2>  
                            {sorted.map((userHour, userHourIndex) => {

                                const columnDate = moment(getDateOfStartOfTheWeek(weekNumber)).add(dayIndex, "day");

                                const finalDateToday = moment(new Date(date))
                                const finalColumnDate = moment(new Date(columnDate), "DD/MM/YYYY")

                                if(dayIndex === userHour.dayId && !userHour.user_name)  

                                return (
                                    <button
                                        key={userHourIndex}
                                        className={`
                                            hour
                                            ${ 
                                                finalColumnDate.diff(finalDateToday, "days") > -1 && 
                                                finalColumnDate.diff(finalDateToday, "days") < 2
                                                ? "active" : "" 
                                            }
                                        `}  
                                        disabled={
                                            finalColumnDate.diff(finalDateToday, "days") > -3 && 
                                            finalColumnDate.diff(finalDateToday, "days") < 0 ||
                                            finalColumnDate.diff(finalDateToday, "days") > 1
                                        }
                                        
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

        <Modal toggle={modalState} action={OpenModal}>
            <div className="userReg-container">
                <form className="userReg-form">
                    <h1>Dodaj nowego użytkownika</h1>
                    <label>
                        Imię:
                        <input 
                            type="text" 
                            name="name"
                            onChange={handleUserFormChange}
                        ></input>
                    </label>
                    <label>
                        Nazwisko:
                        <input 
                            type="text" 
                            name="surname"
                            onChange={handleUserFormChange}
                        ></input>
                    </label>
                    <label>
                        Kurs: 
                        <select 
                            name="course" 
                            onChange={handleUserFormChange}>
                                <option>HTML</option>
                                <option>Python</option>
                        </select>
                    </label>

                    <button onClick={handleUserFormClick}>Dodaj</button>
                </form>
            </div>
        </Modal>

        <Modal toggle={secondModalState} action={handleUserFormClick}>
            <div className="userReg-container">
                <form className="userReg-form">
                    <h1>Nowy user dodany do bazy!</h1>
                    <p>Imię: {newUser.name}</p>
                    <p>Nazwisko: {newUser.surname}</p>
                    <p>Kurs: {newUser.course}</p>
                    <p>ID: {editedurl}{newUser.uuid}</p>
                </form>
            </div>
        </Modal>

        
        </>
    )
}

export default Calendar;