'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background-light dark:bg-background-dark shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-foreground-light dark:text-foreground-dark">
            Knowledge Graphy
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="text-foreground-light dark:text-foreground-dark hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground-light dark:text-foreground-dark hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground-light dark:text-foreground-dark hover:text-blue-500 transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-foreground-light dark:text-foreground-dark hover:text-blue-500 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;