import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const RouteProtecter = () => {
	const { isAuthenticated } = useSelector((state) => state.global);
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

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
