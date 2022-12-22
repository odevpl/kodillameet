const MessagesBox = (props) => {
  
    return ( 
        <div className="message-box">
            <h1>Komunikaty</h1>
            <div className="underline"></div>
            <div className="message">
                <p>Nie ma mnie, zarobiony jestem.</p>
            </div>
            <button onClick={props.action}>Edycja</button>
        </div>
    )
}

export default MessagesBox;






