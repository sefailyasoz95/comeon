import React, { useEffect, useState } from "react";
import GameItem from "../Components/GameItem";
import { getCategories, getGames } from "../Redux/actions";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ICategory, IGame } from "../Constants/types";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import CategoryItem from "../Components/CategoryItem";
const HomePage = () => {
	const { games, categories, isFethingGames, isFetchingCategories } = useAppSelector((state) => state.global);
	const [isGameStarting, setIsGameStarting] = useState<boolean>(false);
	const [gamesState, setGamesState] = useState<IGame[] | undefined>(games);
	const dispatch = useAppDispatch();
	const [selectedCategory, setSelectedCategory] = useState<ICategory>();
	useEffect(() => {
		dispatch(getGames());
		dispatch(getCategories());
	}, []);
	useEffect(() => {
		if (games) {
			setGamesState(games);
		}
	}, [games]);
	useEffect(() => {
		if (categories && !selectedCategory) {
			setSelectedCategory(categories[0]);
		}
	}, [categories]);
	useEffect(() => {
		if (selectedCategory) {
			let filtered = games!.filter((game) => game.categoryIds.includes(selectedCategory.id));
			setGamesState(filtered);
		}
	}, [selectedCategory]);

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.value) {
			let filtered = games!.filter((game) => game.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
			setGamesState(filtered);
		} else {
			setGamesState(games);
		}
	};
	return (
		<div className='w-full md:w-3/4 rounded-xl bor	der mx-auto flex-col flex mt-5 px-5 py-3 shadow-md bg-white'>
			<div className='flex md:flex-row items-center my-2 justify-between flex-col'>
				<input
					placeholder='Search games'
					className='border ring-0 outline-none rounded-lg px-2 py-1 md:w-1/4 w-full mb-3 md:mb-0'
					onChange={handleFilter}
				/>
				<div className='flex flex-row items-center'>
					{isFetchingCategories ? (
						<span className='animate-pulse'>Looading Categories...</span>
					) : (
						categories!.map((category: ICategory, index: number) => (
							<CategoryItem
								item={category}
								key={index}
								isSelected={category.id === selectedCategory?.id}
								onClick={(item: ICategory) => setSelectedCategory(item)}
							/>
						))
					)}
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				{isFethingGames ? (
					<span className='animate-pulse'>Looading Games...</span>
				) : (
					gamesState!.map((item: IGame, index: number) => (
						<GameItem
							item={item}
							key={index}
							onClick={() => {
								setIsGameStarting(true);
								setTimeout(() => {
									const windowObj = window as any;
									windowObj.comeon.game.launch(item.code);
								}, 1000);
							}}
						/>
					))
				)}
			</div>
			{isGameStarting && (
				<div
					onClick={() => {
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
