import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function PrivateRoutes() {
    return (
      <Router>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            {/* <Route path='/home' element={<HomePage/>} />
            <Route path='/cadPaciente' element={<CadPacientePage/>} />
            <Route path='/cadConsulta' element={<CadConsultaPage />} />
            <Route path='/cadExame' element={<CadExamePage />} />
            <Route path='/prontuarios' element={<ProntuariosPage />} />
            <Route path='/detalhes' element={<ProntuarioDetailsPage />} /> */}
          </Routes>
        </Router>
    )
  }