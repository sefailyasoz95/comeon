import React, { useState } from "react";
import { PlayIcon as PlayIconOutline } from "@heroicons/react/24/outline";
// categoryIds: (2)[(0, 2)];
// code: "starburst";
// description: "Starburst is a high paced slot with some nice new features including a Starburst Wild feature. It has 5-reels and 10-bet lines and Traditional Wilds are replaced with an innovative new Starburst Wild which appear on reels 2, 3 or 4 and expand over the entire reel and remain in place for up to 3 re-spins giving you a much better chance of hitting a HUGE win!";
// icon: "images/game-icon/starburst.jpg";
// name: "Starburst";
const GameItem = ({ item, onClick }) => {
	return (
		<div className='flex flex-row border shadow-sm relative hover:shadow-md rounded-lg hover:rounded-xl p-3 my-2 transition-all ease-in-out duration-200'>
			<img
				src={require(`../${item.icon}`)}
				width={100}
				height={100}
				className='object-contain rounded-md mr-3 w-40 h-40'
			/>
			<div className='fle flex-col'>
				<span className='font-bold'>{item.name}</span>
				<br />
				<span className='text-gray-600 '>{item.description}</span>
			</div>
			<button
				className='flex w-20 items-center justify-center absolute bottom-3 right-5 rounded-md px-3 py-1 bg-black text-white'
				onClick={onClick}
			>
				Play
				<PlayIconOutline />
			</button>
		</div>
	);
};

export default GameItem;
