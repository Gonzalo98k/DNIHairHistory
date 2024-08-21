
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./Components/HomeScreen";
import { ReadScreen } from "./Components/VerScreen";
import { ActualizarScreen } from "./Components/ActualizarScreen";
import { EliminarScreen } from "./Components/EliminarScreen";

const App = ()=> {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="/read" element={<ReadScreen></ReadScreen>}></Route>
          <Route path="/update" element={<ActualizarScreen></ActualizarScreen>}></Route>
          <Route path="/delete" element={<EliminarScreen></EliminarScreen>}></Route>
      </Routes>
    </>
  );
}

export default App;
