import "./App.css";
import "./styles/global.css"
import Root from "./page/Root/Root";
import { CalendarProvider } from "./page/providers/CalendarProvider";

const App = () => {
  // Tu providery wrzuć
  return ( 
    <CalendarProvider>
      <Root />
    </CalendarProvider>
  )
}

export default App;
