'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#0F0F0F] border-b border-[#C5A947] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#1E3A8A] to-[#0A192F] rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <span className="text-white font-bold text-xl">Barakath Gems</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link 
                                href="/" 
                                className="text-[#B0B0B0] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link 
                                href="/about" 
                                className="text-[#B0B0B0] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link 
                                href="/admin" 
                                className="text-[#B0B0B0] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Admin
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link 
                            href="/contact" 
                            className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white px-6 py-2 rounded-md text-sm font-medium hover:from-[#0A192F] hover:to-[#1E3A8A] transition-all duration-300 shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-[#B0B0B0] hover:text-white focus:outline-none focus:text-white"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#1C1C1C] border-t border-[#C5A947]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            href="/" 
                            className="text-[#B0B0B0] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className="text-[#B0B0B0] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link 
                            href="/admin" 
                            className="text-[#B0B0B0] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Admin
                        </Link>
                        <Link 
                            href="/contact" 
                            className="bg-gradient-to-r from-[#1E3A8A] to-[#0A192F] text-white block px-3 py-2 rounded-md text-base font-medium hover:from-[#0A192F] hover:to-[#1E3A8A] transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}