import { Copyright } from "lucide-react";
function Footer() {
	return (
		<footer className="bg-black text-white py-6 max-w-none max-sm:text-sm max-sm:">
			<div className="container mx-auto px-4 text-center">
				{/* <Leaf className="w-8 h-8 text-green-500 mx-auto mb-4" /> */}
				<img
					src="/Logo.png"
					alt="Logo"
					className="w-16 flex justify-center items-center mx-auto mb-2 "
				/>
				<p className="text-gray-400 flex justify-center text-sm sm:text-base">
					<Copyright className="mr-1" />
					2025 SmartAgro. Designed and Developed by SmartAgro team.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
