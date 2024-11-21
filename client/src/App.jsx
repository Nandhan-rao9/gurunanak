import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Nutrition from "./components/Nutrition"
import HealthFitness from "./components/Healthfitness"
import HealthRisks from "./components/Healthrisks"
import MentalHealth from "./components/Mentalhealth"
import Home from "./components/Home"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/nutritionAnalysis" element={<Nutrition/>}></Route>
          <Route path="/healthFitness" element={<HealthFitness/>}></Route>
          <Route path="/healthRisks" element={<HealthRisks/>}></Route>
          <Route path="/MentalHealth" element={<MentalHealth/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
