import "./App.css";
import Create from "./componentes/Create.jsx"
import Read from "./componentes/Read.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./componentes/Update";
//
import CreateMedico from "./componentes/CreateMedico.jsx";
import UpdateMedico from "./componentes/UpdateMedico.jsx";

function App() {
  return (
    <>
      <img src="/dental-1815731_960_720.webp" width={100}>
      </img><h2 className="main-header">Turnos Clinica</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />} />
        </Routes>
        <Routes>
          <Route exact path="/createMedico" element={<CreateMedico />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Read />} />
        </Routes>
        <Routes>
          <Route exact path="/update" element={<Update/> } />
        </Routes>
        <Routes>
          <Route exact path="/updateMedico" element={<UpdateMedico/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
