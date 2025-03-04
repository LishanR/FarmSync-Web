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
	CheckCircle2,
} from "lucide-react";
import vinuraImg from "/mem_pics/Vinura.jpg";
import piranavanImg from "/mem_pics/Piranavan.jpg";
import sehanImg from "/mem_pics/Sehan.jpg";
import lishanImg from "/mem_pics/Lishan.jpg";
import niroshanImg from "/mem_pics/Niroshan.jpg";
import sakiththiyanImg from "/mem_pics/Sakiththiyan.jpg";
import { Button } from "@/components/ui/button.jsx";
import NavigationBar from "@/NavigationBar";
import NavPopup from "@/NavPopup";
import Hero from "@/Hero.jsx";
import SectionHeader from "@/SectionHeader.jsx";
import FeatureCard from "@/FeatureCard.jsx";
import TeamMemberCard from "@/TeamMemberCard.jsx";
import Footer from "@/Footer.jsx";
import ContactUs from "@/ContactUs.jsx";
import { useState, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { motion, useInView } from "framer-motion";
import { AnimatedCard } from "@/AnimatedCards.jsx";
import { Badge } from "@/components/ui/badge";
import { PricingPlan } from "@/PricingPlan.jsx";

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
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	// Animation for section headers
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

	return (
		<div className="flex-row h-full w-full m-0 p-0 bg-[#FAFDF7] max-sm:text-balance max-sm:antialiased max-sm:overflow-x-hidden">
			<div className=" ">
				<NavigationBar onMenuClick={toggleMenu} />
				<NavPopup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
			</div>
			{/* Hero Section */}
			<header className=" w-full bg-gradient-to-b from-green-100 to-green-50 py-20 flex items-center justify-center">
				<motion.header
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Hero />
				</motion.header>
			</header>
			{/* About Us Section */}
			<section
				id="about"
				className="py-20 bg-gradient-to-b from-white to-green-50"
			>
				<AnimatedCard
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8 }}
				>
					<div className="max-w-3xl mx-auto text-center px-6">
						<h1 className="text-4xl font-bold tracking-tight text-primary mb-6">
							About FarmSync
						</h1>
						<p
							className="text-gray-600 text-lg p-2 leading-relaxed max-w-prose mx-auto"
							style={{ textAlign: "justify" }}
						>
							FarmSync is an innovative, data-driven decision support system
							designed specifically for Sri Lankan farmers. By leveraging
							real-time data, machine learning, and a user-friendly interface,
							FarmSync empowers farmers to make informed decisions that maximize
							productivity, boost profitability, and promote sustainable
							agricultural practices.
						</p>
					</div>
				</AnimatedCard>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-20 bg-gradient-to-b from-white to-green-50 flex items-center justify-center">
				<div className="container ">
					<AnimatedCard>
						<SectionHeader
							title="Why Choose Us?"
							// subtitle="Discover how our platform revolutionizes farming"
						/>
					</AnimatedCard>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
						<AnimatedCard>
							<FeatureCard
								Icon={ShieldCheck}
								title="Advanced"
								description="Stay ahead with early warnings about potential threats to your crops, ensuring better preparedness and proactive actions."
							/>
						</AnimatedCard>

						<AnimatedCard>
							<FeatureCard
								Icon={Recycle}
								title="Sustainable"
								description="Make decisions that promote long-term environmental health by monitoring crop conditions and minimizing resource waste."
							/>
						</AnimatedCard>

						<AnimatedCard>
							<FeatureCard
								Icon={Lightbulb}
								title="Innovative"
								description="Utilize cutting-edge technology like machine learning and real-time insights to revolutionize your farming practices."
							/>
						</AnimatedCard>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section
				id="features"
				className="py-20 bg-gradient-to-b from-green-100 to-white flex items-center justify-center"
			>
				<div className="container  ">
					<AnimatedCard>
						<SectionHeader
							className={"max-sm:p-1"}
							title="Key Features"
							subtitle="Discover how our platform revolutionizes farming"
						/>
					</AnimatedCard>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
						<AnimatedCard>
							<FeatureCard
								Icon={Sprout}
								title="Smart Crop Recommendations"
								description="Get personalized crop suggestions based on your location, soil type, and market trends"
							/>
						</AnimatedCard>
						<AnimatedCard>
							<FeatureCard
								Icon={LineChart}
								title="Market Insights"
								description="Access real-time market prices and trends to maximize your profits"
							/>
						</AnimatedCard>
						<AnimatedCard>
							<FeatureCard
								Icon={BugOff}
								title="Pest & Disease Alerts"
								description="Receive early warnings about potential threats to your crops"
							/>
						</AnimatedCard>
						<AnimatedCard>
							<FeatureCard
								Icon={Sprout}
								title="Crop Management"
								description="Get tips, best practices, and step-by-step procedures to manage your crops efficiently."
							/>
						</AnimatedCard>
						<AnimatedCard>
							<FeatureCard
								Icon={ShoppingCart}
								title="Place to Bid & Buy From Farmers"
								description="Access a marketplace where you can buy fresh, high-quality produce directly from farmers at real-time market prices"
							/>
						</AnimatedCard>
						<AnimatedCard>
							<FeatureCard
								Icon={Pickaxe}
								title="Labour Management"
								description="Our platform helps farmers find temporary workers for farming tasks, while laborers can discover job opportunities that match their skills and availability."
							/>
						</AnimatedCard>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<SectionHeader
						title="Plans & Pricing"
						subtitle="Choose the plan that works best for you"
					/>
					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
						<PricingPlan
							title="Free Plan"
							price="Rs. 0.00/month"
							features={[
								"Limited price forecasting",
								"Crop recommendations",
								"Planting scheduling",
							]}
						/>
						<div className="relative">
							<div className="absolute top-2 left-[23rem] transform -translate-x-1/2">
								<Badge variant="border border-green-900 text-green-900 hover:bg-green-900 hover:text-white transition">Recommended</Badge>
							</div>
							<PricingPlan
								title="Premium Plan"
								price="Rs. 2,999.00/month"
								isPremium
								features={[
									"Advanced price forecasting",
									"Real-time market updates",
									"Priority support",
									"Disease prediction",
									"Labor management tools",
								]}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id="team" className="py-20 bg-green-50  ">
				<div className="container mx-auto px-4">
					<AnimatedCard>
						<SectionHeader
							title="Meet Our Team"
							subtitle="The experts behind our agricultural innovation"
						/>
					</AnimatedCard>
					<div className="grid md:grid-cols-3 gap-8">
						<AnimatedCard>
							<TeamMemberCard
								name="Vinura Imalka"
								role="Team Lead | Main Backend Developer"
								image={vinuraImg}
								linkedinProfile={"https://www.linkedin.com/in/vinuraimalka"}
							/>
						</AnimatedCard>
						<AnimatedCard>
							<TeamMemberCard
								name="Sivanesan Piranavan"
								role="Backend Sub Developer"
								image={piranavanImg}
								linkedinProfile={
									"https://www.linkedin.com/in/piranavansivanesan"
								}
							/>
						</AnimatedCard>
						<AnimatedCard>
							<TeamMemberCard
								name="Sehan Henadeera"
								role="Backend Developer - Database"
								image={sehanImg}
								linkedinProfile={"https://www.linkedin.com/in/sehanhenadeera/"}
							/>
						</AnimatedCard>
						<AnimatedCard>
							<TeamMemberCard
								name="Lishan Weerasuriya"
								role="Main Frontend Developer"
								image={lishanImg}
								linkedinProfile={
									"https://www.linkedin.com/in/lishanweerasuriya/"
								}
							/>
						</AnimatedCard>
						<AnimatedCard>
							<TeamMemberCard
								name="Niroshan Selvaraj"
								role="Frontend Sub Developer"
								image={niroshanImg}
								linkedinProfile={
									"https://www.linkedin.com/in/niroshanselvaraj/"
								}
							/>
						</AnimatedCard>
						<AnimatedCard>
							<TeamMemberCard
								name="Magenthirarajah Sakiththiyan"
								role="Machine Learning Developer"
								image={sakiththiyanImg}
								linkedinProfile={"https://www.linkedin.com/in/msakiththiyan06/"}
							/>
						</AnimatedCard>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 bg-gradient-to-b from-green-100 to-green-50"
			>
				<div className="container mx-auto px-4">
					<AnimatedCard>
						<SectionHeader
							title="Get In Touch"
							// subtitle="Ready to transform your farming practices? Contact us to learn
							// 	more about how our platform can help you succeed."
						/>
					</AnimatedCard>
					<div className="max-w-lg mx-auto text-center">
						<AnimatedCard>
							<p className="text-gray-600 mb-4">
								Ready to transform your farming practices? Contact us to learn
								more about how our platform can help you succeed.
							</p>
							<ContactUs />
							<Separator className="mt-4" />
							<div className="mt-2 text-md">
								<p>Reach out to us through:</p>
								<a
									href="mailto:smartagro.enquiries@gmail.com"
									className="text-black font-semibold transition-all duration-200 hover:text-green-600"
								>
									farmsync.enquiries@gmail.com
								</a>
							</div>
						</AnimatedCard>
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
