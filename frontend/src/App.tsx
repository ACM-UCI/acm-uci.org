
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Board from "./pages/Board";
import Practice from "./pages/Practice";
import Compete from "./pages/Compete";

import Layout from "./extra/Layout"
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}></Route>
      <Route path="board" element={<Board/>}/>
      <Route path="learn" element={<Learn/>}/>
      <Route path="compete" element={<Compete/>}/>
      <Route path="practice" element={<Practice/>}/>
    </Route>
    </Routes>
  );
}