import {
	BugOff,
	ShieldCheck,
	Recycle,
	Pickaxe,
	Sprout,
	LineChart,
	ShoppingCart,
	Lightbulb,
	ArrowUp,
} from "lucide-react";
import vinuraImg from "/mem_pics/Vinura.jpg";
import piranavanImg from "/mem_pics/Piranavan.jpg";
import sehanImg from "/mem_pics/Sehan.jpg";
import lishanImg from "/mem_pics/Lishan.jpg";
import niroshanImg from "/mem_pics/Niroshan.jpg";
import sakiththiyanImg from "/mem_pics/Sakiththiyan.jpg";
import { Button } from "@/components/ui/button.jsx";
import NavigationBar from "@/NavigationBar";
import Hero from "@/Hero.jsx";
import SectionHeader from "@/SectionHeader.jsx";
import FeatureCard from "@/FeatureCard.jsx";
import TeamMemberCard from "@/TeamMemberCard.jsx";
import Footer from "@/Footer.jsx";
import ContactUs from "@/ContactUs.jsx";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="flex-row h-full w-full m-0 p-0 bg-[#FAFDF7] max-sm:text-balance max-sm:antialiased max-sm:overflow-x-hidden">
			<div className="max-sm:hidden ">
				<NavigationBar />
			</div>
			{/* Hero Section */}
			<header className=" w-full bg-gradient-to-b from-green-100 to-green-50 py-20 flex items-center justify-center">
				<Hero />
			</header>

			<section
				id="about"
				className="py-20 bg-gradient-to-b from-green-100 to-green-50"
			>
				<div className="max-w-3xl mx-auto text-center px-6">
					<h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
						About SmartAgro
					</h1>
					<p
						className="text-gray-600 text-lg p-2 leading-relaxed max-w-prose mx-auto"
						style={{ textAlign: "justify" }}
					>
						SmartAgro is an innovative, data-driven decision support system
						designed specifically for Sri Lankan farmers. By leveraging
						real-time data, machine learning, and a user-friendly interface,
						SmartAgro empowers farmers to make informed decisions that maximize
						productivity, boost profitability, and promote sustainable
						agricultural practices.
					</p>
				</div>
			</section>

			<section className="py-20 bg-gradient-to-b from-green-100 to-green-50 flex items-center justify-center">
				<div className="container ">
					<SectionHeader
						title="Why Choose Us?"
						// subtitle="Discover how our platform revolutionizes farming"
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
						<FeatureCard
							Icon={ShieldCheck}
							title="Advanced"
							description="Stay ahead with early warnings about potential threats to your crops, ensuring better preparedness and proactive actions."
						/>
						<FeatureCard
							Icon={Recycle}
							title="Sustainable"
							description="Make decisions that promote long-term environmental health by monitoring crop conditions and minimizing resource waste."
						/>
						<FeatureCard
							Icon={Lightbulb}
							title="Innovative"
							description="Utilize cutting-edge technology like machine learning and real-time insights to revolutionize your farming practices."
						/>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="py-20 bg-gradient-to-b from-green-100 to-white flex items-center justify-center"
			>
				<div className="container  ">
					<SectionHeader
						className={"max-sm:p-1"}
						title="Key Features"
						subtitle="Discover how our platform revolutionizes farming"
					/>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
						<FeatureCard
							Icon={Sprout}
							title="Smart Crop Recommendations"
							description="Get personalized crop suggestions based on your location, soil type, and market trends"
						/>
						<FeatureCard
							Icon={LineChart}
							title="Market Insights"
							description="Access real-time market prices and trends to maximize your profits"
						/>
						<FeatureCard
							Icon={BugOff}
							title="Pest & Disease Alerts"
							description="Receive early warnings about potential threats to your crops"
						/>
						<FeatureCard
							Icon={Sprout}
							title="Crop Management"
							description="Get tips, best practices, and step-by-step procedures to manage your crops efficiently."
						/>
						<FeatureCard
							Icon={ShoppingCart}
							title="Place to Buy Produce Directly From Farmers"
							description="Access a marketplace where you can buy fresh, high-quality produce directly from farmers at real-time market prices"
						/>
						<FeatureCard
							Icon={Pickaxe}
							title="Labour Management"
							description="Our platform helps farmers find temporary workers for farming tasks, while laborers can discover job opportunities that match their skills and availability."
						/>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id="team" className="py-20 bg-green-50  ">
				<div className="container mx-auto px-4">
					<SectionHeader
						title="Meet Our Team"
						subtitle="The experts behind our agricultural innovation"
					/>
					<div className="grid md:grid-cols-3 gap-8">
						<TeamMemberCard
							name="Vinura Imalka"
							role="Team Lead | Main Backend Developer"
							// image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&auto=format&auto=compress"
							image={vinuraImg}
						/>
						<TeamMemberCard
							name="Sivanesan Piranavan"
							role="Backend Sub Developer"
							// image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=crop&auto=format&auto=compress"
							image={piranavanImg}
						/>
						<TeamMemberCard
							name="Sehan Henadeera"
							role="Backend Developer - Database"
							image={sehanImg}
						/>
						<TeamMemberCard
							name="Lishan Weerasuriya"
							role="Main Frontend Developer"
							image={lishanImg}
						/>
						<TeamMemberCard
							name="Niroshan Selvaraj"
							role="Software Architect | Frontend Sub Developer"
							image={niroshanImg}
						/>
						<TeamMemberCard
							name="Magenthirarajah Sakiththiyan"
							role="Machine Learning Developer"
							image={sakiththiyanImg}
						/>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-gradient-to-b from-green-100 to-green-50"
			>
				<div className="container mx-auto px-4">
					<SectionHeader
						title="Get In Touch"
						// subtitle="Ready to transform your farming practices? Contact us to learn
						// 	more about how our platform can help you succeed."
					/>
					<div className="max-w-lg mx-auto text-center">
						<p className="text-gray-600 mb-4">
							Ready to transform your farming practices? Contact us to learn
							more about how our platform can help you succeed.
						</p>
						<ContactUs />
					</div>
				</div>
			</section>

			{/* Back To Top Button */}
			<div
				className={`fixed bottom-4 right-4 transition-all duration-300 ${
					isScrolled ? "block" : "hidden"
				} max-sm:w-2 max-sm:mr-8`}
			>
				<Button
					onClick={scrollToTop}
					className="bg-white text-black border-black border-2 rounded-3xl hover:bg-black hover:text-white hover:border-green-600 transition-all duration-300 max-sm:w-2 "
				>
					<ArrowUp />
				</Button>
			</div>

			<div className="max-sm:flex max-sm:row-span-3 max-sm:items-center max-sm:justify-center ">
				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
}

export default App;
