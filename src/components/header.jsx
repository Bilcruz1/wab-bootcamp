import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
	return (
		<div className="bg-[#1E1E1E] flex justify-between items-center lg:px-[120px] px-[24px] py-[20px] fixed w-full top-0 z-50 backdrop-blur-lg">
			<a
				href="#"
				className="text-[#FFFFFF] lg:text-[16px] text-[14px] font-bold leading-[28px]"
			>
				A.W.B Bootcamp
			</a>

			<div className="bg-[#FFFFFF] text-[#333333] lg:text-[16px] text-[14px] px-4 py-2 rounded-md cursor-pointer">
				<ScrollLink
					to="techpath"
					smooth={true}
					duration={800}
					offset={-10}
				>
					Join Bootcamp →
				</ScrollLink>
			</div>
		</div>
	);
}
