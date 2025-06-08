import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './pages/posts'
import Post, { Dados } from './pages/posts'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

