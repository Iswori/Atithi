
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page"
import Kaski from "../app/kaski"



export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/kaski" element={<Kaski/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
