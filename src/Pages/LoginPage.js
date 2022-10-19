import React from "react";
import { useDispatch } from "react-redux";
import { getGames, login } from "../Redux/reducer";

const LoginPage = () => {
	const dispatch = useDispatch();
	const handleSubmit = () => {
		dispatch(login());
	};
	return (
		<div className='flex min-h-screen items-center justify-center'>
			<div className='border rounded-xl px-2 flex flex-col items-center py-5 xl:w-1/4 w-1/2'>
				<input
					type='text'
					name='username'
					placeholder='Username'
					className='border ring-0 outline-none w-10/12 rounded-xl px-2 py-1 my-1'
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					className='border ring-0 outline-none w-10/12 rounded-xl px-2 py-1 my-1'
				/>
				<input
					type='button'
					defaultValue='Login'
					className=' rounded-xl xl:w-1/3 w-1/2 bg-black text-white my-1 py-1 cursor-pointer'
					onClick={handleSubmit}
				/>
			</div>
		</div>
	);
};

export default LoginPage;
