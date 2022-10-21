import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameItem from "../Components/GameItem";
import { getCategories, getGames } from "../Redux/actions";
import { XCircleIcon } from "@heroicons/react/24/outline";
const HomePage = () => {
	const { user, games, categories, isFethingGames, isFetchingCategories } = useSelector((state) => state.global);
	const [isGameStarting, setIsGameStarting] = useState(false);
	const [gamesState, setGamesState] = useState(games);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getGames());
		dispatch(getCategories());
	}, []);
	const handleFilter = (e) => {
		if (e.currentTarget.value) {
			let filtered = games.filter((game) => game.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
			setGamesState(filtered);
		} else {
			setGamesState(games);
		}
	};
	return (
		<div className='w-full lg:w-3/4 rounded-xl bor	der mx-auto flex-col flex mt-5 px-5 py-3 shadow-md bg-white'>
			<div className='flex flex-row items-center my-2 justify-between'>
				<input
					placeholder='Search games'
					className='border ring-0 outline-none rounded-lg px-2 py-1 w-1/4'
					onChange={handleFilter}
				/>
				<div className='flex flex-row items-center'>
					{isFetchingCategories ? (
						<span className='animate-pulse'>Looading Categories...</span>
					) : (
						categories.map((category) => (
							<button className='border rounded-lg hover:bg-black hover:text-white transition-all ease-in-out duration-200 border-black px-2 py-1 mx-2'>
								{category.name}
							</button>
						))
					)}
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				{isFethingGames ? (
					<span className='animate-pulse'>Looading Games...</span>
				) : (
					gamesState.map((item, index) => (
						<GameItem
							item={item}
							key={index}
							onClick={() => {
								setIsGameStarting(true);
								setTimeout(() => {
									window.comeon.game.launch(item.code);
								}, 1000);
							}}
						/>
					))
				)}
			</div>
			{isGameStarting && (
				<div
					onClick={(e) => {
						setIsGameStarting(false);
					}}
					className={`fixed w-screen h-screen top-0 left-0 flex items-center justify-center backdrop-blur-md z-30`}
				>
					<XCircleIcon
						onClick={() => setIsGameStarting(false)}
						className='absolute w-12 h-12 right-5 top-5 hover:rotate-180 transition-all ease-in-out duration-200 cursor-pointer'
					/>
					<div id='game-launch' className='z-40'></div>
				</div>
			)}
		</div>
	);
};

export default HomePage;
