import AgendaPage from "./pages/AgendaPage";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/Agenda" />} />
        <Route path="/Agenda" element={<AgendaPage />} />
      </Routes>
    </div>
  );
}

export default App;
