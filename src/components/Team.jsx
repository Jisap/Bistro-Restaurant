import React from 'react';
import { teamData } from '../data'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';





const Team = () => {
  
  const { pretitle, title, sub1, sub2, name, occupation, signatureImg, chefImg } = teamData;

  return (
    <section className='relative top-96 z-10 lg:top-[480px] min-h-[720px]'>
      <div className='container mx-auto'>
        {/* text & image wrapper*/}
        <div className='flex flex-col lg:flex-row lg:gap-x-[120px] items-center lg:items-start'>
           {/* text */}
           <div className='flex-1 text-center lg:text-left lg:pt-16'>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='h2 capitalize'>{title}</h2>
            <p>{sub1}</p>
            <p>{sub2}</p>
           </div>
           {/* image */}
           <div className='flex-1'>image</div>
        </div>
      </div>
    </section>
  )
};

export default Team;
