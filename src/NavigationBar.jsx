import React from "react";
import { Menu } from "lucide-react";

function NavigationBar({ onMenuClick }) {
	const handleMenuClick = (e) => {
		e.stopPropagation();
		onMenuClick();
	};

	return (
		<nav
			id="nav"
			className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 md:p-11 h-20 z-50 transition-all duration-300 rounded-xl w-full bg-gradient-to-r from-green-100 to-green-50 bg-opacity-75 shadow-lg"
		>
			<div className="flex items-center">
				<a href="/">
					<img src="/Logo.png" alt="Logo" className="w-12 h-12 mr-2" />
				</a>
				<div className="flex items-center mt-5">
					<a
						className="text-3xl font-bold text-green-600 mb-6 hover:text-green-600 cursor-pointer"
						href="/"
					>
						Smart
					</a>
					<a
						className="text-3xl font-bold text-gray-900 mb-6 hover:text-gray-900 cursor-pointer"
						href="/"
					>
						Agro
					</a>
				</div>
			</div>

			{/* Desktop Navigation Links - Visible only on md screens and up */}
			<div className="hidden md:flex space-x-8 items-center">
				<a
					className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
					href="#features"
				>
					Features
				</a>
				<a
					className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
					href="#team"
				>
					Team
				</a>
				<a
					className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
					href="#contact"
				>
					Contact Us
				</a>
			</div>

			{/* Mobile Menu Button - Visible only on small screens */}
			<div className="md:hidden absolute top-4 right-4">
				<button
					onClick={handleMenuClick}
					className="focus:outline-none bg-transparent border-none"
				>
					<Menu
						size={32}
						className="text-gray-900 hover:text-green-600 transition-transform duration-300 cursor-pointer"
					/>
				</button>
			</div>
		</nav>
	);
}

export default NavigationBar;
