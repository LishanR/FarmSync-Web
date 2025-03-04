import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const PricingPlan = ({ title, price, features, isPremium = false }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px 0px" }}
			transition={{ duration: 0.6 }}
			className={`p-8 rounded-xl shadow-lg ${
				isPremium ? "bg-green-50 border-2 border-green-200" : "bg-white"
			} transition-all duration-300 hover:shadow-xl`}
		>
			<div className="text-center space-y-6 h-full flex flex-col">
				<h3 className="text-2xl font-bold text-green-900">{title}</h3>
				<div className="text-4xl font-semibold text-green-600">{price}</div>
				<ul className="space-y-4 text-green-700 flex-grow">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center gap-2">
							<CheckCircle2 className="text-green-500 w-5 h-5" />
							{feature}
						</li>
					))}
				</ul>
				<div className="mt-auto">
					<Button
						onClick={() => alert("Coming soon!")}
						className={`w-full ${
							isPremium
								? "bg-green-600 hover:bg-green-700"
								: "bg-gray-800 hover:bg-gray-900"
						}`}
					>
						{isPremium ? "Get Premium" : "Get Started"}
					</Button>
				</div>
			</div>
		</motion.div>
	);
};
