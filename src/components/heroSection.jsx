import React from 'react';
import stacks from '../Assets/stacks.png';
import heroIcon from '../Assets/icons/heroIcon.svg';

export default function HeroSection() {
	return (
		<div>
			{/* HERO SECTION */}
			<div className="lg:min-h-screen bg-[url('/src/Assets/heroPage.png')] lg:pt-[100px] pt-[150px]  pb-[60px] bg-cover bg-center text-white lg:flex  lg:items-center lg:justify-center px-4">
				{/* Content Wrapper */}
				<div className="w-full max-w-6xl text-center">
					{/* Top Banner */}
					<div className="w-fit mx-auto font-light lg:text-[16px] text-[10px] bg-white/10 lg:px-[16px] px-[10px] lg:py-[12px] py-[7px] rounded-full flex items-center justify-center gap-2 text-sm">
						<span>
							Are you ready to break into the tech industry and create real
							impact?
						</span>
						<img
							src={heroIcon}
							alt=""
						/>
					</div>

					{/* Header */}
					<div className="lg:mt-10 mt-6">
						<div className="flex items-center justify-center lg:gap-3 gap-2 mb-2">
							<div className="lg:text-[64px] text-[24px]">🚀</div>
							<h1 className="lg:text-[64px] text-[24px] font-medium">
								Tech Mastery Bootcamp
							</h1>
						</div>

						<p className="text-[#ffffff] max-w-4xl mx-auto lg:text-[20px] text-[14px] lg:mb-10 mb-6">
							The Tech Mastery Bootcamp is a hands-on, project-driven program
							designed to equip you with in-demand digital skills — whether you
							want to design stunning user experiences, code beautiful
							frontends, or build powerful backends.
						</p>

						<button className="bg-transparent lg:text-[16px] text-[9px] font-bold border-2 border-white lg:px-8 px-[15px] lg:py-3 py-[7px] rounded hover:bg-white hover:text-gray-900 transition-all duration-300">
							Join Bootcamp →
						</button>
					</div>
				</div>
			</div>

			{/* STACK IMAGE */}
			<div className="w-full ">
				<img
					src={stacks}
					alt=""
					className="w-full"
				/>
			</div>
		</div>
	);
}
