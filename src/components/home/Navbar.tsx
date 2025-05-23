
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav className="bg-[#FE5F20] py-4 px-4 md:px-8 lg:px-20 relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-3xl text-white font-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/5160d6259faa576b3e58c43f263f1cec3d9f9560?placeholderIfAbsent=true"
            alt="Arthlete logo"
            className="w-10 h-10 object-contain"
          />
          <div>Arthlete</div>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-[#FE5F20] mt-0 py-4 px-4 flex flex-col gap-4 shadow-lg z-50">
                <button onClick={() => scrollToSection('home')} className="text-white font-medium text-left py-2">Home</button>
                <button onClick={() => scrollToSection('features')} className="text-white font-medium text-left py-2">Features</button>
                <button onClick={() => scrollToSection('reviews')} className="text-white font-medium text-left py-2">Reviews</button>
                <button onClick={() => scrollToSection('pricing')} className="text-white font-medium text-left py-2">Pricing</button>
                <button onClick={() => scrollToSection('faq')} className="text-white font-medium text-left py-2">FAQ</button>
                <a 
                  href="https://forms.gle/RHsTMRrQkHoToqxXA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-neutral-800 px-4 py-2 rounded-md font-medium text-center"
                >
                  Download
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-5 md:gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white font-medium text-sm md:text-base">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-white font-medium text-sm md:text-base">Features</button>
            <button onClick={() => scrollToSection('reviews')} className="text-white font-medium text-sm md:text-base">Reviews</button>
            <button onClick={() => scrollToSection('pricing')} className="text-white font-medium text-sm md:text-base">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-white font-medium text-sm md:text-base">FAQ</button>
            <a 
              href="https://forms.gle/RHsTMRrQkHoToqxXA" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-800 px-4 py-2 rounded-md font-medium text-sm md:text-base"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
