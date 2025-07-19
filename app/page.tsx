import Link from 'next/link';

export default function Home() {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Blue Sapphire",
      price: "$2,500",
      description: "Exquisite 3.5 carat natural sapphire with excellent clarity",
      image: "💎"
    },
    {
      id: 2,
      name: "Pink Diamond Ring",
      price: "$15,000",
      description: "Rare 1.2 carat pink diamond in platinum setting",
      image: "💍"
    },
    {
      id: 3,
      name: "Emerald Necklace",
      price: "$8,500",
      description: "Stunning Colombian emerald pendant with diamond accents",
      image: "🟢"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Bringing Earth's Rare Treasures to You
          </h1>
          <p className="text-xl md:text-2xl text-[#B0B0B0] mb-8 max-w-3xl mx-auto">
            Discover our exclusive collection of premium gemstones and fine jewelry, 
            each piece carefully selected and certified for authenticity and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/collections" 
              className="bg-[#C5A947] text-[#0F0F0F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B0A047] transition-colors duration-300 shadow-lg"
            >
              Explore Collections
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[#0F0F0F] transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-white text-4xl mb-4">⭐</div>
              <h3 className="text-white font-semibold text-lg mb-2">5-Star Rated</h3>
              <p className="text-[#B0B0B0] text-sm">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl mb-4">💎</div>
              <h3 className="text-white font-semibold text-lg mb-2">GIA Certified</h3>
              <p className="text-[#B0B0B0] text-sm">Every Stone Verified</p>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl mb-4">🛡️</div>
              <h3 className="text-white font-semibold text-lg mb-2">25+ Years</h3>
              <p className="text-[#B0B0B0] text-sm">Industry Experience</p>
            </div>
            <div className="text-center">
              <div className="text-white text-4xl mb-4">🔒</div>
              <h3 className="text-white font-semibold text-lg mb-2">Secure</h3>
              <p className="text-[#B0B0B0] text-sm">Insurance Protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Collections</h2>
            <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of the finest gemstones and jewelry pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-[#1C1C1C] border border-[#C5A947] rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-[#B0B0B0] mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <Link 
                    href={`/product/${product.id}`}
                    className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white px-4 py-2 rounded hover:from-[#0A192F] hover:to-[#1E3A8A] transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Barakath Gems?</h2>
            <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto">
              We're committed to providing the highest quality gemstones and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Selection</h3>
              <p className="text-[#B0B0B0]">Every gem is personally selected by our certified gemologists</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Full Documentation</h3>
              <p className="text-[#B0B0B0]">Complete certification and appraisal documentation included</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Design</h3>
              <p className="text-[#B0B0B0]">Bespoke jewelry design services for unique pieces</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-[#0A192F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Gem?
          </h2>
          <p className="text-[#B0B0B0] text-lg mb-8">
            Schedule a consultation with our experts or visit our showroom to explore our exclusive collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#C5A947] text-[#0F0F0F] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B0A047] transition-colors duration-300"
            >
              Schedule Consultation
            </Link>
            <a 
              href="tel:+15551234567" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-[#0F0F0F] transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
