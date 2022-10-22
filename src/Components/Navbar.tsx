import { useState } from "react";
import { logout } from "../Redux/actions";
import { useAppDispatch, useAppSelector } from "../Redux/store";

const Navbar = () => {
	const { user } = useAppSelector((state) => state.global);
	const dispatch = useAppDispatch();
	const [showUserCard, setShowUserCard] = useState<boolean>(false);
	const handleLogout = () => {
		dispatch(logout(user.name.split(" ")[0].toLowerCase()));
	};
	return (
		<nav
			className={`flex flex-row items-center 
            justify-between md:backdrop-blur-md shadow-md w-full z-10
            md:w-3/4 md:sticky md:top-0 mx-auto px-3 py-2 rounded-lg`}
		>
			<div>
				<span className='font-bold mr-2'>
					Come<span className='text-[#5bbd72]'>On</span>!
				</span>
			</div>
			<div className='flex flex-row items-center justify-between'>
				<div className='md:flex md:flex-col hidden text-right justify-between'>
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
