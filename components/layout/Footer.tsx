export function Footer() {
    return (
        <footer className="bg-[#0F0F0F] border-t border-[#C5A947] text-[#B0B0B0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <span className="text-white font-bold text-lg">Barakath Gems</span>
                        </div>
                        <p className="text-sm mb-4 max-w-md">
                            Bringing Earth's rare treasures to you. We specialize in premium quality gems and jewellery, 
                            offering certified stones and exceptional craftsmanship since our establishment.
                        </p>
                        <div className="flex space-x-4">
                            <div className="flex items-center text-sm">
                                <span className="text-white mr-2">★</span>
                                <span>5.0 Rating</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-white mr-2">✓</span>
                                <span>Certified Gems</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/" className="hover:text-white transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-white transition-colors duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/collections" className="hover:text-white transition-colors duration-200">
                                    Collections
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white transition-colors duration-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                                <span className="text-white mr-2 mt-1">📍</span>
                                <span>123 Gem Street<br />Jewelry District<br />City, State 12345</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-white mr-2">📞</span>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-white mr-2">✉️</span>
                                <span>info@barakathgems.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#1C1C1C] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm">
                        © 2024 Barakath Gems. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-[#B0B0B0] hover:text-white transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#B0B0B0] hover:text-white transition-colors duration-200">
                            Terms of Service
                        </a>
                        <a href="#" className="text-[#B0B0B0] hover:text-white transition-colors duration-200">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
