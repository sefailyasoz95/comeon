import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions";

const Navbar = () => {
	const { user } = useSelector((state) => state.global);
	const avatar = user.avatar;
	const dispatch = useDispatch();
	const [showUserCard, setShowUserCard] = useState(false);
	const handleLogout = () => {
		dispatch(logout(user.name.split(" ")[0].toLowerCase()));
	};
	return (
		<nav
			className={`flex flex-row items-center 
            justify-between lg:backdrop-blur-md shadow-md w-full z-10
            lg:w-3/4 lg:sticky lg:top-0 mx-auto px-3 py-2 rounded-lg`}
		>
			<div>
				<span className='font-bold mr-2'>
					Come<span className='text-[#5bbd72]'>On</span>!
				</span>
			</div>
			<div className='flex flex-row items-center justify-between'>
				<div className='lg:flex lg:flex-col hidden text-right justify-between'>
					<span className='font-semibold text-xs'>{user.name}</span>
					<span className='font-semibold text-xs'>{user.event}</span>
				</div>
				<img
					src={require(`../${user.avatar}`)}
					width={50}
					height={50}
					className='rounded-xl mx-3'
					onClick={() => setShowUserCard(!showUserCard)}
				/>
				<span
					onClick={handleLogout}
					className='border px-2 py-1 border-black rounded-xl hover:bg-black hover:text-white transition-all ease-in-out duration-200 cursor-pointer'
				>
					Logout
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
