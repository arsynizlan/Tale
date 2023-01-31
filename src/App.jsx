import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
