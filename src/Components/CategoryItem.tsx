import React from "react";
import { ICategory } from "../Constants/types";

type Props = {
	item: ICategory;
	onClick: (item: ICategory) => void;
	isSelected: boolean;
};

const CategoryItem: React.FC<Props> = React.memo(({ item, onClick, isSelected }: Props) => {
	return (
		<button
			onClick={() => onClick(item)}
			className={`border rounded-lg ${
				isSelected ? "bg-black text-white font-bold" : "hover:bg-black hover:text-white"
			} transition-all ease-in-out duration-200 border-black px-2 py-1 mx-2`}
		>
			{item.name}
		</button>
	);
});

export default CategoryItem;
