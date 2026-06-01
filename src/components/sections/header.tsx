'use client'

import React, { useEffect, useState } from 'react';

const HeaderSection: React.FC = () => {
   
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto p-4">
                <h1 className="text-white text-2xl">My Header</h1>
            </div>
        </header>
    );
};

export default HeaderSection;