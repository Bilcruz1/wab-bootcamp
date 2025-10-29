import React, { useState } from 'react';
import { X } from 'lucide-react';
import abs from '../Assets/abs.png';
import bilal from '../Assets/bilal.png';
import wisom from '../Assets/wisdom.png';

export default function Team() {
	const [selectedMember, setSelectedMember] = useState(null);

	const teamMembers = [
		{
			id: 1,
			name: 'Abdulkadir Abdulsamad',
			role: 'UI/UX Designer',
			image: abs,
			bio: 'Hey there! I’m a UI/UX designer and design tutor who loves turning ideas into digital experiences that people actually enjoy using. I’m all about clean interfaces, smart design decisions, and making products that just feel right. When I’m not designing, I’m teaching — helping new designers understand not just how to design, but why great design matters. I’ve mentored students through the full process, from sketching wireframes to creating polished, user-centered prototypes.For me, design isn’t just about visuals — it’s about solving problems, telling stories, and creating experiences that connect with people.',
			portfolioUrl: 'https://behance.net',
		},
		{
			id: 2,
			name: 'Bilal Muhammed',
			role: 'Front-end developer',
			image: bilal,
			bio: 'Learn directly from experienced designers and engineers who guide you every step of the way — from fundamentals to advanced project execution',
			portfolioUrl: 'https://behance.net',
		},
		{
			id: 3,
			name: 'wisdom',
			role: 'Back-end developer',
			image: wisom,
			bio: 'Learn directly from experienced designers and engineers who guide you every step of the way — from fundamentals to advanced project execution',
			portfolioUrl: 'https://behance.net',
		},
	];

	const openModal = member => {
		setSelectedMember(member);
	};

	const closeModal = () => {
		setSelectedMember(null);
	};

	return (
		<div className=" bg-[#1B1B1B] text-white lg:py-16 py-10 px-4">
			<h2 className="text-center lg:text-[40px] text-[20px] font-bold  mb-4">
				Our Esteemed Tutors
			</h2>
			<p className="text-center lg:text-[16px] text-[14px] font-light text-[#ffffff] max-w-4xl mx-auto mb-10 ">
				Pick your passion and master it. Each track focuses deeply on one area
				of tech, so you graduate with targeted, job-ready expertise.
			</p>

			<div className="max-w-7xl mx-auto">
				{/* Team Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{teamMembers.map(member => (
						<div
							key={member.id}
							className="bg-[#1F1F1F] rounded-2xl lg:p-10 p-5 text-center hover:bg-zinc-750 transition-colors"
						>
							{/* Profile Image */}
							<div className="mb-6">
								<img
									src={member.image}
									alt={member.name}
									className="w-[165px] h-[165px] rounded-full mx-auto object-cover border-1 border-zinc-700"
								/>
							</div>

							{/* Name and Role */}
							<h3 className="text-xl font-bold mb-1">{member.name}</h3>
							<p className="text-gray-400 text-sm mb-6">{member.role}</p>

							{/* Learn More Button */}
							<button
								onClick={() => openModal(member)}
								className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded text-sm transition-colors"
							>
								Learn more
							</button>
						</div>
					))}
				</div>

				{/* Modal */}
				{selectedMember && (
					<div
						className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
						onClick={closeModal}
					>
						<div
							className="bg-[#1B1B1B] rounded-lg max-w-2xl w-full p-8 relative"
							onClick={e => e.stopPropagation()}
						>
							{/* Close Button */}
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
							>
								<X size={24} />
							</button>

							{/* Modal Content */}
							<div className="text-center">
								{/* Profile Image */}
								<div className="mb-6">
									<img
										src={selectedMember.image}
										alt={selectedMember.name}
										className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-zinc-700"
									/>
								</div>

								{/* Name */}
								<h2 className="text-[24px] font-semibold mb-6">
									{selectedMember.name}
								</h2>

								{/* Bio */}
								<p className="text-[#ffffff]/90 font-light text-[16px] mb-8 max-w-xl mx-auto">
									{selectedMember.bio}
								</p>

								{/* Action Buttons */}
								<div className="flex gap-4 justify-center">
									<button
										onClick={() =>
											window.open(selectedMember.portfolioUrl, '_blank')
										}
										className="bg-[#2D2D2D] text-[#ffffff]/80 px-6 py-3 rounded-xl text-[16px] font-bold"
									>
										Visit my behance to see my portfolio
									</button>
									<button
										onClick={closeModal}
										className="bg-[#2D2D2D] text-[#ffffff]/80 px-6 py-2 rounded-xl text-[16px] font-bold"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
