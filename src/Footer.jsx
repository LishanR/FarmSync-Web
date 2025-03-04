import { Copyright, Instagram, Linkedin, Github } from "lucide-react";

function Footer() {
	return (
		<footer className="bg-[rgba(236,252,241,1)] text-gray-800 py-8">
			<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
				{/* Description Section (Left) */}
				<div className="flex-1 text-center mb-8 md:mb-0 flex flex-col items-center">
					<div className="flex items-center space-x-3">
						<img src="/Logo.png" alt="Logo" className="w-12 h-12" />
						<h2 className="text-2xl font-bold">FarmSync</h2>
					</div>
					<p className="text-gray-600 mt-3 max-w-md">
						Optimizing farming with data-driven insights and automation for
						sustainable growth, profitability, and higher productivity.
					</p>
				</div>

				{/* Social Media Links Section (Middle) */}
				<div className="flex-1 flex flex-row md:flex-col items-center justify-center gap-10 md:gap-8 mt-8 md:mt-0 w-full">
					<a
						href="https://www.instagram.com/farmsync.lk/"
						className="hover:scale-125 transition-all duration-300"
					>
						<Instagram className="text-[#ff0088]" />
					</a>
					<a
						href="https://www.linkedin.com/company/farmsynclk"
						className="hover:scale-125 transition-all duration-300"
					>
						<Linkedin className="text-[#0077b5]" />
					</a>
					<a
						href="https://github.com/LishanR/FarmSync-Web.git"
						className="hover:scale-125 transition-all duration-300"
					>
						<Github className="text-gray-800" />
					</a>
				</div>

				{/* Footer Links Section (Right) */}
				<div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-600 text-sm w-full md:w-1/2 mt-8 md:mt-0">
					{/* Company Section */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="text-gray-800 font-semibold mb-4 w-full text-center md:text-left">
							Company
						</h3>
						<ul className="space-y-4 flex flex-col items-center md:items-start">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#team"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Meet the Team
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Updates
								</a>
							</li>
						</ul>
					</div>

					<div className="text-left md:text-left items-center mx-auto md:mx-0">
						<h3 className="text-gray-800 font-semibold mb-4 text-center md:text-left">
							Helpful Links
						</h3>
						<ul className="space-y-4 text-center md:text-left">
							<li>
								<a
									href="#contact"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									FAQs
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Legal
								</a>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-1 text-center md:text-left mx-auto md:mx-0 mt-4 md:mt-0">
						<h3 className="text-gray-800 font-semibold mb-4">Policies</h3>
						<ul className="space-y-4 flex flex-col items-center md:items-start">
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Accessibility
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300"
								>
									Terms & Conditions
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* Copyright Section */}
			<div className="text-center text-gray-500 text-sm mt-12">
				<p className="flex justify-center items-center">
					<Copyright className="mr-2" />
					2025 FarmSync. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
