import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Newsletter from './pages/Newsletter'

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/about" element={<About />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/cocktail/:id" element={<SingleCocktail />} />
    </Routes>
    </div>
  )
}

export default App
