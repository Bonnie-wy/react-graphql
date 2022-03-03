import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";

function App() {
  return (
    <Routes>
      <Route strict exact path="/" element={<CharacterList />} />
      <Route strict exact path="/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
