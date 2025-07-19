export default function AboutUs() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Story
                    </h1>
                    <p className="text-xl text-[#B0B0B0] max-w-3xl mx-auto">
                        A legacy of passion, expertise, and unwavering commitment to bringing Earth&apos;s most precious treasures to discerning collectors and jewelry enthusiasts.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-[#1C1C1C]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-[#B0B0B0] text-lg leading-relaxed">
                                To source and curate the world&apos;s finest gemstones, ensuring each piece meets the highest standards of quality, authenticity, and beauty. We believe every gem tells a story, and we&apos;re honored to be part of yours.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                            <p className="text-[#B0B0B0] text-lg leading-relaxed">
                                To become the most trusted name in premium gemstones and jewelry, known for our exceptional quality, expert guidance, and commitment to preserving the natural beauty of Earth&apos;s treasures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">A Legacy of Excellence</h2>
                        <div className="w-24 h-1 bg-[#C5A947] mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">25+</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Years of Experience</h3>
                            <p className="text-[#B0B0B0]">Decades of expertise in gem identification and valuation</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">10K+</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Happy Customers</h3>
                            <p className="text-[#B0B0B0]">Trusted by collectors and jewelry enthusiasts worldwide</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">100%</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Certified Gems</h3>
                            <p className="text-[#B0B0B0]">Every stone comes with proper certification and documentation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-[#1C1C1C]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
                        <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
                            Our team of certified gemologists and jewelry experts are passionate about helping you find the perfect piece.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white text-4xl">👨‍💼</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">John Smith</h3>
                            <p className="text-[#C5A947] mb-2">Founder & Lead Gemologist</p>
                            <p className="text-[#B0B0B0] text-sm">GIA Certified Gemologist with 25+ years of experience</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white text-4xl">👩‍💼</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
                            <p className="text-[#C5A947] mb-2">Senior Jewelry Designer</p>
                            <p className="text-[#B0B0B0] text-sm">Award-winning designer specializing in custom pieces</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white text-4xl">👨‍🔬</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Michael Chen</h3>
                            <p className="text-[#C5A947] mb-2">Certification Specialist</p>
                            <p className="text-[#B0B0B0] text-sm">Expert in gem certification and quality assurance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Affiliations */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Certifications & Affiliations</h2>
                        <p className="text-[#B0B0B0] text-lg">We maintain the highest standards in the industry</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 border border-[#C5A947] rounded-lg">
                            <div className="text-white text-3xl mb-2">💎</div>
                            <h3 className="text-white font-semibold">GIA Certified</h3>
                            <p className="text-[#B0B0B0] text-sm">Gemological Institute of America</p>
                        </div>
                        
                        <div className="text-center p-6 border border-[#C5A947] rounded-lg">
                            <div className="text-white text-3xl mb-2">🏆</div>
                            <h3 className="text-white font-semibold">BBB Accredited</h3>
                            <p className="text-[#B0B0B0] text-sm">Better Business Bureau</p>
                        </div>
                        
                        <div className="text-center p-6 border border-[#C5A947] rounded-lg">
                            <div className="text-white text-3xl mb-2">🔒</div>
                            <h3 className="text-white font-semibold">Insurance Certified</h3>
                            <p className="text-[#B0B0B0] text-sm">Full coverage protection</p>
                        </div>
                        
                        <div className="text-center p-6 border border-[#C5A947] rounded-lg">
                            <div className="text-white text-3xl mb-2">⭐</div>
                            <h3 className="text-white font-semibold">5-Star Rated</h3>
                            <p className="text-[#B0B0B0] text-sm">Customer satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-[#0A192F]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-[#B0B0B0] text-lg mb-8">
                        Visit our showroom or schedule a consultation to explore our exclusive collection of premium gemstones and custom jewelry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/contact" 
                            className="bg-[#C5A947] text-[#0F0F0F] px-8 py-3 rounded-md font-semibold hover:bg-[#B0A047] transition-colors duration-300"
                        >
                            Schedule Consultation
                        </a>
                        <a 
                            href="tel:+15551234567" 
                            className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0F0F0F] transition-colors duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
} 