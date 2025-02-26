// import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Navigate } from "react-router-dom";

function Hero() {
	return (
		<div id="hero" className="container w-full text-center pt-20">
			<img
				src="/Logo.png"
				alt="Logo"
				className="w-16 h-16 flex justify-center items-center mx-auto mb-6"
			/>
			{/* <Leaf className="w-12 h-12 text-green-600 mx-auto mb-6" /> */}
			<div className="flex flex-row justify-center items-center mb-6">
				<h1 className="text-5xl font-bold text-green-700 mb-6">Smart</h1>
				<h1 className="text-5xl font-bold text-gray-900 mb-6">Agro</h1>
			</div>
			<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
				Empowering Sri Lankan farmers with data-driven insights and tools for
				better agricultural decisions
			</p>
			<div className="space-x-4">
				<Button
					size="lg"
					variant="primary"
					href="#"
					className="text-white hover:border-white transition-all duration-300"
					onClick={() => {
						alert("Application Under Development! Will be available soon!");
					}}
				>
					Go to Application
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="hover:border-black transition-all duration-300"
					onClick={() => {
						const section = document.getElementById("about");
						if (section) {
							window.scrollTo({
								top: section.offsetTop,
								behavior: "smooth",
							});
						}
					}}
				>
					Learn More
				</Button>
			</div>
		</div>
	);
}

export default Hero;
