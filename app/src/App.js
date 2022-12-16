import "./App.css";
import "./styles/global.css"
import Root from "./page/Root/Root";
import { CalendarProvider } from "./providers/CalendarProvider";

const App = () => {

  return ( 
    <CalendarProvider>
      <Root />
    </CalendarProvider>
  )
}

export default App;
