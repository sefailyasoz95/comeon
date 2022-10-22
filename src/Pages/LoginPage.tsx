import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../Constants/types";
import { login } from "../Redux/actions";
import { useAppDispatch, useAppSelector } from "../Redux/store";

const LoginPage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [formError, setFormError] = useState(false);
	const { isFetchingUser, error, message, success } = useAppSelector((state) => state.global);
	const [formInputs, setFormInputs] = useState<ILogin>({
		username: "",
		password: "",
	});
	const handleSubmit = () => {
		if (formInputs.username && formInputs.password) {
			formError && setFormError(false);
			dispatch(login({ username: formInputs.username, password: formInputs.password }));
		} else setFormError(true);
	};
	const handleInput = (event: React.FocusEvent<HTMLInputElement, Element>) => {
		setFormInputs({ ...formInputs, [event.currentTarget.name]: event.currentTarget.value });
	};
	useEffect(() => {
		if (success) {
			navigate("/");
		}
	}, [isFetchingUser, success]);

	return (
		<div className='flex min-h-screen items-center justify-center'>
			<div className='border rounded-xl px-2 flex bg-white shadow-lg flex-col items-center py-5 xl:w-1/4 w-1/2'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='border ring-0 outline-none w-10/12 rounded-xl px-2 py-1 my-1'
					onBlur={handleInput}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='border ring-0 outline-none w-10/12 rounded-xl px-2 py-1 my-1'
					onBlur={handleInput}
				/>
				<input
					type='button'
					value={isFetchingUser ? "Loading..." : "Login"}
					className={`rounded-xl xl:w-1/3 w-1/2 transition-all ease-in-out duration-200 bg-black text-white my-1 py-1 cursor-pointer ${
						isFetchingUser ? "animate-bounce" : ""
					}`}
					onClick={handleSubmit}
				/>
				{formError && <span className='italic text-lg text-red-600 my-3 mx-auto'>Both fields are required !</span>}
				{error && <span className='italic text-lg text-red-600 my-3 text-center'>{message}</span>}
			</div>
		</div>
	);
};

export default LoginPage;
