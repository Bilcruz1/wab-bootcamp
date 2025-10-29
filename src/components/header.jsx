import React from 'react';

export default function Header() {
	return (
		<>
			<div className="bg-[#1E1E1E] flex justify-between items-center lg:px-[120px] px-[24px] py-[20px] fixed w-full top-0 z-50 backdrop-blur-lg">
				<a
					href=""
					className="text-[#FFFFFF] lg:text-[16px] text-[14px] font-bold leading-[28px]"
				>
					W.A.B Bootcamp
				</a>
				<div className="bg-[#FFFFFF] text-[#333333] lg:text-[16px] text-[14px] px-4 py-2 rounded-md">
					<a href="">Join Bootcamp → </a>
				</div>
			</div>
		</>
	);
}
