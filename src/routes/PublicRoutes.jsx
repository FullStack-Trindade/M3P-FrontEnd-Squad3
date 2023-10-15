import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CadastroPage from "../pages/Cadastro/Cadastro.page"
import LoginPage from "../pages/Login/Login.page"

export default function PublicRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/cadastro" element={<CadastroPage />} />
			</Routes>
		</Router>
	)
}
