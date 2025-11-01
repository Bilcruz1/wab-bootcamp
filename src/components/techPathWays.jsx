import techPathIcon from '../Assets/icons/techPathIcon.svg';
import checkIcon from '../Assets/icons/checkIcon.svg';
import { useNavigate } from 'react-router-dom';
export default function TechPathway() {
	const navigate = useNavigate();
	const tracks = [
		{
			icon: '💎',
			title: 'UI/UX Design',
			description: 'Design experiences that delight and drive results.',
			learningPoints: [
				'Design Thinking & User Research',
				'Wireframing and Prototyping',
				'Mobile-responsive design',
				'Visual Design Principles & Typography',
				'Usability Testing and User Journey Mapping',
			],
			graduation:
				'A complete portfolio showcasing app and website interfaces — plus the confidence to work as a UI/UX Designer.',
			path: '/ui-ux',
		},
		{
			icon: '💻',
			title: 'Frontend Development',
			description:
				'Turn designs into interactive, responsive digital experiences.',
			learningPoints: [
				'HTML5, CSS3, and Responsive Web Design',
				'JavaScript (ES6+) and TypeScript',
				'React.js and Component Architecture',
				'State Management, APIs, and Frontend O...',
				'UI Libraries and Animation Techniques',
			],
			graduation:
				'A strong portfolio of interactive web apps, ready to launch your career as a Frontend Developer or Web Engineer.',
			path: '/frontend',
		},
		{
			icon: '⚙️',
			title: 'Backend Development',
			description: 'Build the engine that powers every digital product.',
			learningPoints: [
				'Programming with Node.js or Python (Dja...',
				'RESTful APIs and Microservices',
				'Databases: MongoDB, MySQL, or Postgre...',
				'Authentication, Authorization & Security...',
				'Cloud Deployment (AWS, Firebase, or Ren...',
			],
			graduation:
				'Working backend systems and deployed APIs — ready to take on roles as a Backend Developer or Software Engineer',
			path: '/backend',
		},
	];

	return (
		<div
			id="techpath"
			className="min-h-screen bg-[#1B1B1B] text-[#ffffff] lg:py-20 py-8 px-4"
		>
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center lg:mb-16 mb-8">
					<h2 className="lg:text-[40px] text-[20px] font-bold lg:mb-4 mb-3">
						Your Pathway to Tech Excellence
					</h2>
					<p className=" lg:text-[16px] text-[14px] font-light text-[#ffffff] max-w-4xl mx-auto ">
						In this bootcamp, you'll choose one of three specialized tracks —
						each crafted to take you from beginner to professional level through
						guided mentorship, real-world projects, and career support.
					</p>
					<div className="w-fit mt-[16px] mx-auto font-light lg:text-[16px] text-[10px] bg-white/10 lg:px-[16px] px-[10px] lg:py-[12px] py-[7px] rounded-full flex items-center justify-center gap-2 text-sm">
						<span>Start on November 10 to December 12</span>
						<img
							src={techPathIcon}
							alt=""
						/>
					</div>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{tracks.map((track, index) => (
						<div
							key={index}
							className="bg-[url('/src/Assets/pathCardBg.png')] bg-cover rounded-2xl lg:p-8 p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 flex flex-col"
						>
							{/* Icon and Title */}
							<div className="mb-10">
								<div className="text-4xl mb-4">{track.icon}</div>
								<h3 className="text-[32px] leading-[48px] font-semibold mb-3">
									{track.title}
								</h3>
								<p className="text-[#ffffff]/60 text-[14px] leading-[28px]">
									{track.description}
								</p>
							</div>

							{/* What you'll learn */}
							<div className="mb-10 flex-grow">
								<h4 className="text-[20px] leading-[28px] text-[#ffffff] font-semibold mb-10">
									What you'll learn:
								</h4>
								<ul className="space-y-4">
									{track.learningPoints.map((point, idx) => (
										<li
											key={idx}
											className="flex items-start gap-3 text-[#ffffff]/60 text-[14px] leading-[28px]"
										>
											<img
												src={checkIcon}
												alt=""
												className="w-6 h-6 flex-shrink-0 mt-1 opacity-80"
											/>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Graduation Section */}
							<div className="mb-10 font-medium text-[14px] leading-[28px] text-[#ffffff]">
								<h4 className=" mb-3">You'll graduate with:</h4>
								<p className="">{track.graduation}</p>
							</div>

							{/* Button */}
							<button
								onClick={() => navigate(track.path)} // 👈 navigate to path
								className="w-fit bg-[#313131] hover:bg-gray-600/50 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium border border-gray-600/50 hover:border-gray-500"
							>
								Reserve a seat
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
