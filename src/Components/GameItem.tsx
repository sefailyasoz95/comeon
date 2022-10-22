import React, { useState } from "react";
import { PlayIcon as PlayIconOutline } from "@heroicons/react/24/outline";
import { IGame } from "../Constants/types";

type Props = {
	item: IGame;
	onClick: () => void;
};
const GameItem: React.FC<Props> = React.memo(({ item, onClick }: Props) => {
	return (
		<div className='flex md:flex-row flex-col border shadow-sm relative hover:shadow-md rounded-lg hover:rounded-xl p-3 my-2 transition-all ease-in-out duration-200'>
			<img
				src={require(`../${item.icon}`)}
				width={100}
				height={100}
				className='object-contain rounded-md mr-3 md:w-40 md:h-40 w-full'
			/>
			<div className='flex flex-col justify-center'>
				<span className='font-bold'>{item.name}</span>
				<br />
				<div className='flex flex-col items-end h-full'>
					<span className='text-gray-600 flex-1'>{item.description}</span>
					<button className='flex w-20 rounded-md px-3 py-1 bg-black text-white' onClick={onClick}>
						Play
						<PlayIconOutline />
					</button>
				</div>
			</div>
		</div>
	);
});

export default GameItem;
