import React from 'react'
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Socials from './Socials';
import { footerData} from '../data'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';


const Footer = () => {
  
  const { contact, hours, social} = footerData
  
  return (
    <footer className='relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20'>
      <div className='container mx-auto h-full'>
        {/* newsletter & info */}
        <div>
          {/* newsletter */}
          <Newsletter />
          {/* info */}
          <div>info</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer