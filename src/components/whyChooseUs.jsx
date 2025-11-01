import React from 'react';
import sl from '../Assets/sl.png';
import mt from '../Assets/mt.png';
import hl from '../Assets/hl.png';
// import { Code, Users, Briefcase } from 'lucide-react';

export default function WhyChooseUs() {
	const features = [
		{
			icon: 'Code',
			image: sl,
			title: 'Specialized Learning',
			description:
				'Pick your passion and master it. Each track focuses deeply on one area of tech, so you graduate with targeted, job-ready expertise.',
		},
		{
			icon: 'Users',
			image: mt,
			title: 'Mentor-Guided Training',
			description:
				'Learn directly from experienced designers and engineers who guide you every step of the way — from fundamentals to advanced project execution.',
		},
		{
			icon: 'Briefcase',
			image: hl,
			title: 'Hands-On, Project-Based Learning',
			description:
				"No theory overload. You'll build real projects that mirror industry challenges, preparing you for real-world jobs.",
		},
	];

	return (
		<div className="min-h-screen bg-[#1B1B1B] text-white py-16 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center lg:mb-16 mb-4">
					<h2 className="lg:text-[40px] text-[20px]  font-bold flex items-center justify-center gap-3">
						<span className="text-[40px]">💡</span>
						Why Choose Our Bootcamp?
					</h2>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-[#1F1F1F] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
						>
							{/* Image */}
							<div className=" overflow-hidden">
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Content */}
							<div className="px-5 py-8">
								<h3 className="lg:text-[24px] text-[20px] font-semibold text-[#FFFFFF] mb-5">
									{feature.title}
								</h3>
								<p className=" text-[16px] text-[#FFFFFF] font-light">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
