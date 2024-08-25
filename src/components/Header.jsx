import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import LogoWhite from '../assets/img/header/logo-white.png';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../variants';


const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0,0,0,0.92',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)', // máscara circular muy pequeña (5.8% del tamaño del contenedor) centrada en el 50% horizontal y en la parte superior del elemento (0% vertical).
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300, // Rigidez del resorte (muelle);
      damping: 140,   // Controla cuánto se "amortigua" el resorte; valores más altos suavizan la animación reduciendo el rebote.
    },
  },
  show: {
    opacity: 1,
    clipPath: 'circle(130% at 50% 0)',  // Aquí, la máscara circular es mucho más grande (130% del tamaño del contenedor), cubriendo efectivamente todo el elemento, lo que hace que el elemento sea completamente visible
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};


const Header = () => {
  
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })
  
  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate={isActive ? 'show' : ''}
      className='fixed w-full max-w-[1800px] z-50 py-4 bg-pink-200'
    >
      <div className='container mx-auto'>
        <div>
          {/* menu button */}
          <div onClick={() => setNav(!nav)}>
            menu button
          </div>
          {/* logo */}
          <div>
          <a href='#'>
            {/* if header is active make logo 90 x 90 else 107 x 107px */}
            <img 
              src={LogoWhite} 
              alt='' 
              className={`${
                isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'
              }`} 
            />
          </a>
          </div>
          {/* socials icons */}
          <div>
            <Socials />
          </div>
          {/* nav */}
          <motion.div 
            variants={navVariants}
            initial='hidden'
            animate={nav ? 'show' : ''}
            className='absolute bg-accent w-[310px] h-[50vh] right-0 lg:left-0 top-[120px] bottom-0 z-50 rounded-lg shadow-xl'>
            <Nav />
          </motion.div>
        </div>
      </div>
    </motion.header>
  ) 
};

export default Header;
