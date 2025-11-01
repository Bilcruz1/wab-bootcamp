import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import checkIcon from '../../Assets/icons/checkIcon.svg';

export default function UIUXPage() {
	const [activeTab, setActiveTab] = useState('beginner');
	const navigate = useNavigate();

	const levels = {
		beginner: {
			title: 'Beginner Level: Design Foundations',
			subtitle: 'Understanding users, design principles, and tools.',
			outline: [
				'Introduction to UI/UX and the Product Design Process',
				'Understanding Users — Research, Personas, and Empathy Maps',
				'Design Thinking & Problem Framing',
				'Introduction to Figma',
				'Wireframing Basics: Turning Ideas into Layouts',
				'Color Theory, Typography, and Visual Hierarchy',
				'Accessibility & Inclusive Design',
				'Mini Project: Redesign a Simple App Interfacee',
			],
			amount: 100000,
		},
		intermediate: {
			title: 'Intermediate Level: User Experience & Prototyping',
			subtitle:
				'Creating user flows, testing designs, and refining interfaces.',
			outline: [
				'Advanced Wireframing & Interactive Prototypes',
				'User Flows and Information Architecture',
				'Visual Design Systems & Style Guides',
				'Component Libraries and Design Consistency',
				'Usability Testing — Planning and Conducting Tests',
				'Collaboration Tools: FigJam, Miro, Notion',
				'Working with Developers: Design Handoff & Documentation',
				'Major Project: Design a Multi-Page App or Website',
			],
			amount: 125000,
		},
		advanced: {
			title: 'Advanced Level: Product Design & UX Strategy',
			subtitle:
				'Building complete, portfolio-ready product designs and mastering UX strategy.',
			outline: [
				'End-to-End Product Design (from Brief to Prototype)',
				'Advanced Prototyping & Micro-Interactions',
				'UX Writing and Content Strategy',
				'Design Systems and Branding Integration',
				'A/B Testing and Data-Driven Design',
				'Accessibility at Scale',
				'Portfolio Building and Case Study Writing',
				'Capstone Project: Real-World Product Design Challenge',
			],
			amount: 150000,
		},
	};

	const current = levels[activeTab];

	const handleReserveSeat = () => {
		navigate('/checkout', {
			state: {
				course: 'UI/UX Design',
				level: current.title,
				amount: current.amount,
			},
		});
	};

	return (
		<div className="min-h-screen  bg-[#1B1B1B] text-white font-playpen">
			{/* Header */}
			<div className=" max-w-7xl mx-auto flex justify-center">
				<div className="max-w-7xl mx-auto px-6 lg:pt-20 pt-20">
					<h1 className="lg:text-[40px] text-[24px] text-center font-medium mb-4">
						Choose Your Track. Learn at Your Level
					</h1>
					<p className="text-[#ffffff] text-[16px] font-light text-center">
						Learn UI/UX design from fundamentals to advanced product design.
						Create beautiful, user-centered interfaces that solve real problems.
					</p>
				</div>
			</div>

			{/* Tabs */}
			<div className="max-w-7xl  mx-auto px-4 py-10">
				<div className="flex justify-center gap-3 mb-10">
					<button
						onClick={() => setActiveTab('beginner')}
						className={`lg:px-6 px-4 py-3 rounded-full lg:text-[16px] text-[12px] font-bold transition-all ${
							activeTab === 'beginner'
								? 'bg-[#ffffff] text-[#333333]'
								: 'bg-[#ffffff]/10 text-[#ffffff] hover:bg-gray-700'
						}`}
					>
						Beginner <span className="lg:inline-block hidden">Level</span>
					</button>
					<button
						onClick={() => setActiveTab('intermediate')}
						className={`lg:px-6 px-4 py-3 rounded-full lg:text-[16px] text-[12px] font-bold transition-all ${
							activeTab === 'intermediate'
								? 'bg-[#ffffff] text-[#333333]'
								: 'bg-[#ffffff]/10 text-[#ffffff] hover:bg-gray-700'
						}`}
					>
						Intermediate <span className="lg:inline-block hidden">Level</span>
					</button>
					<button
						onClick={() => setActiveTab('advanced')}
						className={`lg:px-6 px-4 py-3 rounded-full lg:text-[16px] text-[12px] font-bold transition-all ${
							activeTab === 'advanced'
								? 'bg-[#ffffff] text-[#333333]'
								: 'bg-[#ffffff]/10 text-[#ffffff] hover:bg-gray-700'
						}`}
					>
						Advanced <span className="lg:inline-block hidden">Level</span>
					</button>
				</div>

				{/* Content Card */}
				<div className="bg-[url('/src/Assets/levelsCardBg.png')] bg-contain backdrop-blur-sm rounded-2xl py-8 px-4 border border-gray-700 max-w-7xl">
					<h2 className="lg:text-[32px] text-[20px] lg:leading-[48px] text-[#ffffff] font-semibold mb-2 ">
						{current.title}
					</h2>
					<p className="text-[#ffffff]/60 text-[14px] leading-[28px] lg:mb-10 mb-8">
						Focus: {current.subtitle}
					</p>

					<h3 className="text-[16px] font-semibold lg:mb-10 mb-8">
						Class Outline:
					</h3>

					<div className="space-y-4 mb-8">
						{current.outline.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-3"
							>
								<div className="flex-shrink-0 ">
									<img
										src={checkIcon}
										alt=""
										className="w-6 h-6 flex-shrink-0 "
									/>
								</div>
								<p className="text-[#ffffff]/70 text-[14px] leading-[28px]">
									{item}
								</p>
							</div>
						))}
					</div>

					<div className="pt-6 ">
						<div className="flex items-center justify-between mb-6">
							<div>
								<p className="lg:text-[32px] text-[24px] font-bold">
									₦{current.amount.toLocaleString()}
								</p>
							</div>
						</div>

						<button
							onClick={handleReserveSeat}
							className="w-fit bg-[#323231] text-[#ffffff] border-[1px] border-gray-600 px-6 py-3 rounded-lg font-semibold"
						>
							Reserve Seat
						</button>
					</div>
				</div>
				<button
					onClick={() => navigate(-1)}
					className="mt-10  text-gray-400 hover:text-white text-[18px] underline"
				>
					← Go Back
				</button>
			</div>
		</div>
	);
}
