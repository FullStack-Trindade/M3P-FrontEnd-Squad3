import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function PublicRoutes() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {/* <Route path='/cadastro' element={} /> */}
        </Routes>
      </Router>
  )
}