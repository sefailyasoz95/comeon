import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type Props = {};
const NotFoundPage: React.FC<Props> = React.memo((props: Props) => {
	const [countDown, setCountDown] = useState<number>(3);
	const navigate = useNavigate();
	useEffect(() => {
		if (countDown > 0) {
			setTimeout(() => {
				setCountDown(countDown - 1);
			}, 1000);
		} else {
			navigate("/");
		}
	}, [countDown]);

	return (
		<div className=' h-screen justify-center items-center text-center flex-row flex mt-5 px-5 py-3 text-red-600 font-bold'>
			<span className='p-5 rounded-xl shadow-md bg-white '>
				We couldn't find the page you're looking for ! <br /> You will be redirected in {countDown}...
			</span>
		</div>
	);
});

export default NotFoundPage;
