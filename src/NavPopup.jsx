import React, { useEffect, useRef } from "react";

function NavPopup({ isOpen, onClose }) {
	const popupRef = useRef(null);

	useEffect(() => {
		// Wait for next tick to add the event listener
		const timeoutId = setTimeout(() => {
			const handleClickOutside = (event) => {
				// Check if popupRef exists and if click was outside
				if (popupRef.current && !popupRef.current.contains(event.target)) {
					onClose();
				}
			};

			// Only add event listener if popup is open
			if (isOpen) {
				document.addEventListener("mousedown", handleClickOutside);
			}

			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, 0);

		return () => clearTimeout(timeoutId);
	}, [isOpen, onClose]);

	// Only render for mobile devices, and only when isOpen is true
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 md:hidden">
			<div
				ref={popupRef}
				className="bg-white p-8 rounded-lg shadow-lg max-w-md popup-content"
			>
				<h2 className="text-2xl font-bold mb-4">Menu</h2>
				<ul className="space-y-4">
					<li>
						<a
							className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
							href="#features"
							onClick={onClose}
						>
							Features
						</a>
					</li>
          <li>
						<a
							className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
							href="#pricing"
							onClick={onClose}
						>
							Plans & Pricing
						</a>
					</li>
					<li>
						<a
							className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
							href="#team"
							onClick={onClose}
						>
							Team
						</a>
					</li>
					<li>
						<a
							className="text-green-600 hover:text-green-500 transition-all cursor-pointer"
							href="#contact"
							onClick={onClose}
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavPopup;
