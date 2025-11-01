import React from 'react';
import { Check } from 'lucide-react';
import checkIcon from '../Assets/icons/checkIcon.svg';
import { Link as ScrollLink } from 'react-scroll';

export default function WhoCanJoinSection() {
	const features = [
		'Beginners eager to start a tech career',
		'Career changers ready to transition into UI/UX, Frontend, or backend roles',
		'Entrepreneurs who want to build and manage their own digital products',
		'Students or professionals looking to upskill and stay relevant in the digital age',
	];

	return (
		<div className=" bg-gradient-to-br from-[#14140d] via-[#1F1F1F] to-[#1F1F1F] text-white flex">
			<div className="w-full lg:w-1/2 flex items-center px-6 lg:px-[120px]  lg:py-16 py-16">
				{/* Left Content */}
				<div className="max-w-2xl space-y-8">
					<div className="flex items-center lg:justify-start justify-center gap-3">
						<h2 className="lg:text-[32px] text-[24px] font-medium">
							🎓 Who Can Join
						</h2>
					</div>

					<p className="text-[16px] font-light text-[#FFFFFF]">
						No experience? No problem. You'll start{' '}
						<span className="">from the basics</span> and grow to expert level
						through guided practice
					</p>

					<div className="space-y-4">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-start gap-4 group"
							>
								<div className="flex items-center justify-center">
									<div className="w-6 h-6 flex-shrink-0 mt-1 rounded-full   flex items-center justify-center">
										<img
											src={checkIcon}
											alt=""
											className="w-6 h-6 "
										/>
									</div>
								</div>

								<p className="font-light text-[14px] leading-[28px] text-[#FFFFFF]/60">
									{feature}
								</p>
							</div>
						))}
					</div>

					<button className="mt-8 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
						<ScrollLink
							to="techpath"
							smooth={true}
							duration={800}
							offset={-10}
						>
							Join Bootcamp →
						</ScrollLink>
					</button>
				</div>
			</div>

			{/* Right Image - Full Height */}
			<div className="hidden lg:block lg:w-1/2 relative">
				<div className="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=1600&fit=crop"
						alt="Developer workspace with dual monitors showing code"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1F1F1F]/40"></div>
				</div>

				{/* Decorative elements */}
				<div className="absolute top-20 right-20 w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
			</div>
		</div>
	);
}
