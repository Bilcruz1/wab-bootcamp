import React from 'react';
import stacks from '../Assets/stacks.png';
import heroIcon from '../Assets/icons/heroIcon.svg';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<div>
			{/* Hero Section */}
			<div className="lg:min-h-screen bg-[url('/src/Assets/heroPage.png')] lg:pt-[100px] pt-[150px] pb-[60px] bg-cover bg-center text-white lg:flex lg:items-center lg:justify-center px-4 overflow-hidden">
				<div className="w-full max-w-6xl text-center">
					{/* Intro Badge */}
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						className="w-fit mx-auto font-light lg:text-[16px] text-[10px] bg-white/10 lg:px-[16px] px-[10px] lg:py-[12px] py-[7px] rounded-full flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
					>
						<span>
							Are you ready to break into the tech industry and create real
							impact?
						</span>
						<img
							src={heroIcon}
							alt=""
							className="w-4 lg:w-6 animate-pulse"
						/>
					</motion.div>

					{/* Title & Description */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="lg:mt-10 mt-6"
					>
						<div className="flex items-center justify-center lg:gap-3 gap-2 mb-2">
							<motion.div
								animate={{ rotate: [0, 10, -10, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'mirror',
								}}
								className="lg:text-[64px] text-[24px]"
							>
								🚀
							</motion.div>
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

						{/* Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="flex gap-3 justify-center items-center"
						>
							<motion.button
								whileHover={{ scale: 1.08 }}
								whileTap={{ scale: 0.95 }}
								className="bg-transparent lg:text-[16px] text-[13px] font-bold border-2 border-white lg:px-8 px-[15px] lg:py-3 py-[7px] rounded"
							>
								<ScrollLink
									to="techpath"
									smooth={true}
									duration={800}
									offset={-10}
								>
									Join Bootcamp →
								</ScrollLink>
							</motion.button>

							<motion.a
								whileHover={{ scale: 1.08 }}
								whileTap={{ scale: 0.95 }}
								href="https://wa.me/2348162752044?text=Hello%2C%20I%20want%20to%20register%20for%20the%20bootcamp%20or%20make%20some%20enquiries.%20What%20is%20the%20process%20involved%3F"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#313131] border-[1px] text-[#ffffff] lg:text-[16px] text-[13px] font-bold lg:px-8 px-[15px] lg:py-3 py-[7px] rounded inline-block hover:bg-[#444]"
							>
								Chat With Us
							</motion.a>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Stacks Image */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 1 }}
				className="w-full"
			>
				<img
					src={stacks}
					alt=""
					className="w-full"
				/>
			</motion.div>
		</div>
	);
}
