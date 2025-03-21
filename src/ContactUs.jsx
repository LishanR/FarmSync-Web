import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		emailjs
			.sendForm(
				// import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
				"service_3ie1zdl",
				// import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				"template_6xuey7y",
				form.current,
				// import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
				"6Fr9OqS3tBxD_HOuh"
			)
			.then(
				(result) => {
					console.log("SUCCESS!", result.text);
					alert("Thank you for your message! We will get back to you soon.");
					form.current.reset(); // Clear the form
				},
				(error) => {
					console.log("FAILED...", error.text);
					alert("Failed to send message. Please try again.");
				}
			)
			.finally(() => {
				setIsSubmitting(false);
			});
	};
	return (
		<section className="flex flex-col items-center py-1 ">
			<Card className="w-full max-w-md shadow-2xl ">
				<CardContent>
					<form className="mt-6" ref={form} onSubmit={sendEmail}>
						<label className="block" htmlFor="name">
							Name
							<input
								placeholder="John Smith"
								type="text"
								id="name"
								name="user_name"
								className="block w-full px-4 py-2 mt-2 border rounded-md shadow-xl text-sm"
								required
							/>
						</label>
						<label className="block mt-4" htmlFor="email">
							Email
							<input
								placeholder="johnsmith@example.com"
								type="email"
								id="email"
								name="user_email"
								className="block w-full px-4 py-2 mt-2 border rounded-md shadow-xl text-sm"
								required
							/>
						</label>
						<label className="block mt-4" htmlFor="message">
							Message
							<textarea
								id="message"
								name="message"
								placeholder="What's on your mind?"
								className="block w-full px-4 py-2 mt-2 border rounded-md shadow-xl text-sm"
								rows={4}
								required
							/>
						</label>
						<Button
							variant="primary"
							type="submit"
							className="mt-6 flex items-center justify-center w-full px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-md shadow-xl hover:bg-green-500 hover:border-black"
						>
							{isSubmitting ? (
								"Sending..."
							) : (
								<>
									<Send className="mr-2" />
									Send
								</>
							)}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
}
