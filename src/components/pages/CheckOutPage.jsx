import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
	const { state } = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	const { course, level, amount } = state || {};

	return (
		<div className="min-h-screen font-playpen bg-[#1B1B1B] text-[#ffffff] lg:px-6 px-4 py-12 flex flex-col items-center">
			<h1 className="text-[32px] font-medium mb-3">Check Out</h1>
			<p className="text-[14px] font-light mb-8">
				Please fill in the information below
			</p>

			<div className="flex flex-col lg:flex-row gap-10 max-w-5xl w-full justify-between">
				{/* LEFT SECTION */}
				<div className="bg-[url('/src/Assets/pathCardBg.png')] bg-cover bg-right border border-gray-800 rounded-2xl lg:p-8 p-4 flex-1">
					<h2 className="lg:text-[26px] text-[14px] font-semibold mb-1">
						{level || 'No Selected Level'}: {course || 'No Selected Course'}
					</h2>
					<p className="text-[#ffffff] mb-8 lg:text-[26px] text-[14px] font-medium">
						₦{amount?.toLocaleString() || 'NILL'}
					</p>

					{/* FORM */}
					<form className="space-y-6">
						<div>
							<label className="block text-[#ffffff] text-[14px] font-medium mb-1.5">
								Name
							</label>
							<input
								type="text"
								placeholder="Enter full name"
								className="w-full px-4 py-4  bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 placeholder-[#ffffff]/70 text-[#ffffff]/80"
							/>
						</div>

						<div>
							<label className="block text-[#ffffff] text-[14px] font-medium mb-1.5">
								Email Address
							</label>
							<input
								type="email"
								placeholder="Enter your email address"
								className="w-full px-4 py-4  bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 placeholder-[#ffffff]/70 text-[#ffffff]/80"
							/>
						</div>

						<div>
							<label className="block text-[#ffffff] text-[14px] font-medium mb-1.5">
								Mobile Number
							</label>
							<input
								type="tel"
								placeholder="Enter your mobile number"
								className="w-full px-4 py-4  bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 placeholder-[#ffffff]/70 text-[#ffffff]/80"
							/>
						</div>

						<div>
							<label className="block text-[#ffffff] text-[14px] font-medium mb-1.5">
								Age
							</label>
							<input
								type="number"
								placeholder="Enter your age"
								className="w-full px-4 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 placeholder-[#ffffff]/70 text-[#ffffff]/80"
							/>
						</div>

						<button
							type="button"
							className="w-fit mt-4 bg-[#2a2a2a] hover:bg-gray-700 text-white font-medium p-4 rounded-lg border border-gray-700 transition-all duration-300"
						>
							Proceed to payment
						</button>
					</form>
				</div>

				{/* RIGHT SECTION */}
				<div className="bg-[url('/src/Assets/pathCardBg.png')] bg-cover bg-right h-fit border border-gray-800 rounded-2xl p-8 flex-1">
					<h3 className="text-[24px] font-semibold mb-3">Class Information</h3>
					<p className="text-gray-400 text-[14px] mb-7 leading-[22px]">
						All classes are scheduled to hold online. Once payment is confirmed,
						a link with all necessary information about classes will be sent to
						your email. Looking forward to having you!
					</p>

					<ul className="space-y-3 text-gray-300 text-[16px]">
						<li>🕒 Monday 8pm – 9pm</li>
						<li>🕒 Wednesday 8pm – 9pm</li>
						<li>🕒 Saturday 8pm – 9pm</li>
						<li>🕒 Sunday 8pm – 9pm</li>
					</ul>
				</div>
			</div>

			<button
				onClick={() => navigate(-1)}
				className="mt-10 text-gray-400 hover:text-white text-[18px] underline"
			>
				← Go Back
			</button>
		</div>
	);
}
