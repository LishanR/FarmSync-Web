function NavigationBar() {
	return (
		<nav
			id="nav"
			className=" flex top-0 left-0 right-0 items-center justify-between p-16 h-40 z-50 transition-all duration-300 rounded-xl w-full bg-gradient-to-r from-green-100 to-green-50"
		>
			<div className="flex items-center  ">
				<a href="/">
					<img
						src="/Logo.png"
						alt="Logo"
						className="w-12 h-12 mr-2"
					/>
				</a>
				<div className="flex items-center mt-5">
					<a
						className="text-3xl font-bold text-green-600 mb-6 hover:text-green-600 cursor-default"
						href="/"
					>
						Smart
					</a>
					<a
						className="text-3xl font-bold text-gray-900 mb-6 hover:text-gray-900 cursor-default"
						href="/"
					>
						Agro
					</a>
				</div>
			</div>
			<div className="flex items-center gap-4 text-base">
				{/* <a
					className="text-green-600 hover:text-green-500  transition-all"
					href="/"
				>
					Home
				</a> */}
				<a
					className="text-green-600 hover:text-green-500  transition-all"
					href="#features"
				>
					Features
				</a>
				<a
					className="text-green-600 hover:text-green-500  transition-all"
					href="#team"
				>
					Team
				</a>
				<a
					className="text-green-600 hover:text-green-500  transition-all"
					href="#contact"
				>
					Contact Us
				</a>
				{/* <a
					className="hover:text-gray-200  transition-all bg-green-600 text-white px-4 py-2 rounded-lg"
					href="#"
				>
					View App
				</a> */}
			</div>
		</nav>
	);
}

export default NavigationBar;
