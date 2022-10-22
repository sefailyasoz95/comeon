import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";
import Navbar from "./Navbar";

const RouteProtecter = () => {
	const { isAuthenticated } = useAppSelector((state) => state.global);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		!isAuthenticated && navigate("/login");
	}, [isAuthenticated]);

	return !isAuthenticated ? (
		<Navigate to={"/login"} state={{ from: location }} />
	) : (
		<>
			<Navbar />
			<Outlet />;
		</>
	);
};

export default RouteProtecter;
