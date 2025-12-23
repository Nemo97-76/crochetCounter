
import "./App.css"
import Counter from './components/counter'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LengthLeftCalculator from './components/legnthLeftcalculator.jsx'

function App() {
  return(
<>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Counter/>}/>
    /*  <Route path="/lengthLeftCalculator" element={<LengthLeftCalculator/>}/>*/
    </Routes>
    </BrowserRouter>
</>

)
}

export default App
