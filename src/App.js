import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RouteProtecter from "./Components/RouteProtecter";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* AUTH PAGES */}
				<Route path='/login' element={<LoginPage />} />
				{/* APP PAGES */}
				<Route element={<RouteProtecter />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
