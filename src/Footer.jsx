import { Copyright,Instagram, Linkedin, Github } from "lucide-react";

function Footer() {
	return (
		<footer className="bg-[rgba(236,252,241,1)] text-gray-800 py-8">
			<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
  
        {/* Description Section (Left) */}
        <div className="flex-1 text-center mb-8 md:mb-0 flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <img src="/Logo.png" alt="Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-bold">SmartAgro</h2>
          </div>
          <p className="text-gray-600 mt-3 max-w-md">
          Optimizing farming with data-driven insights and automation for profitability
          for higher productivity and profitability.
          </p>
        </div>

        {/* Social Media Links Section (Middle) */}
        <div className="flex-1 flex flex-col items-center gap-6 md:gap-8 mt-8 md:mt-0">
          <a href="https://www.instagram.com/smartagro__?igsh=MXRneHVwc2U0MDV1cg==" 
            className="hover:scale-125 transition-all duration-300">
            <Instagram className="text-[#ff0088]" />
          </a>
          <a href="https://www.linkedin.com/company/smartagro-official" 
            className="hover:scale-125 transition-all duration-300">
            <Linkedin className="text-[#0077b5]" />
          </a>
          <a href="https://github.com/LishanR/SmartAgro-Web.git" 
            className="hover:scale-125 transition-all duration-300">
            <Github className="text-gray-800" />
          </a>
        </div>

        {/* Footer Links Section (Right) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-600 text-sm w-full md:w-1/2 mt-8 md:mt-0">
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">About</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Meet the Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Updates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-4">
              <li><a href="#contact" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Legal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Policies</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Accessibility</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500 hover:decoration-2 transition-all duration-300">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
			{/* Copyright Section */}
			<div className="text-center text-gray-500 text-sm mt-12">
				<p className="flex justify-center items-center">
				<Copyright className="mr-2" />
				2025 SmartAgro. All rights reserved.
				</p>
			</div>
		</footer>

	);
}

export default Footer;
