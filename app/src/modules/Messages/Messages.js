import { useState } from "react";

const Messages = () => {
  
    const [message, setMessage] = useState('')

    const hanldeMessageChange = event => {
        setMessage(event.target.value)
    }

    return ( 
        <div className="message-box">
            <h1>Komunikaty</h1>
            <div className="underline"></div>
            <div className="message">
                <textarea 
                    id="message"
                    placeholder="Brak aktualnych komunikatów"
                    name="message"
                    value={message}
                    onChange={hanldeMessageChange}
                    className="textarea"
                ></textarea>
            </div>
        </div>
    )
}

export default Messages;






