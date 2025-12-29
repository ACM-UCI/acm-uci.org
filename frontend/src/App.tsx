
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Board from "./pages/Board";
import Practice from "./pages/Practice";
import Compete from "./pages/Compete";

import Home2 from "./pages/Home2.jsx";
import Learn2 from "./pages/Learn2.jsx";
import Practice2 from "./pages/Practice2.jsx";
import Board2 from "./pages/Board2.jsx";
import Compete2 from "./pages/Compete2.jsx";

import Home3 from "./pages/Home3.jsx";
import Learn3 from "./pages/Learn3.jsx";

import Layout from "./extra/Layout"
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <Routes>
    <Route path="/">
      <Route path="home2secret" element={<Home2/>}/>
      <Route path="learn2secret" element={<Learn2/>}/>
      <Route path="practice2secret" element={<Practice2/>}/>
      <Route path="board2secret" element={<Board2/>}/>
      <Route path="compete2secret" element={<Compete2/>}/>

      <Route path="home3secret" element={<Home3/>}/>
      <Route path="learn3secret" element={<Learn3/>}/>
    </Route>
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