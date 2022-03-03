import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route strict exact path="/" element={<CharacterList />} />
      <Route strict exact path="/search" element={<Search />} />
      <Route strict exact path="/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
