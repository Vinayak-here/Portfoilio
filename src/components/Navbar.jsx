import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
  <div className="inner flex items-center justify-between max-w-7xl mx-auto px-4 w-full">
    
    {/* Logo - left */}
    <a className="logo text-xl font-bold" href="#hero">
      Vinay
    </a>

    {/* Center Nav Links */}
    <nav className="desktop mx-auto ml-60">
      <ul className="flex gap-6">
        {navLinks.map(({ link, name }) => (
          <li key={name} className="group">
            <a href={link} className="flex flex-col items-center">
              <span>{name}</span>
              <span className="underline"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* Buttons - right */}
    <div className="flex gap-4">
      <a href="#contact" className="contact-btn group">
        <div className="inner">
          <span>Contact me</span>
        </div>
      </a>

      <a href="/pdf/VinayakResume.pdf" download className="contact-btn group">
        <div className="inner">
          <span>Resume</span>
        </div>
      </a>
    </div>
  </div>
</header>


    )
}

export default Navbar