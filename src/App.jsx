import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './pages/posts'
import Dados from './pages/dados'
import Navbar from './components/navbar'

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/post" element={<Posts />} />
        <Route path="/dados/:id" element={<Dados/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

