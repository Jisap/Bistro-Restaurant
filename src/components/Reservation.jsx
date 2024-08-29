import React, { useState } from 'react';
import { reservationData } from '../data';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import '../timepicker.css';
import { FaUsers, FaCalendar, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';


const Reservation = () => {

  const { title, subtitle, modelImg, btnText } = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00')

  return (
    <div className='relative top-96 z-30 pb-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        {/* text */}
        <div>text</div>
        {/* form */}
        <form> 
          
          {/* datepicker */}
          <div>
            <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
              <FaCalendar />
              <div>Choose Date</div>
            </div>
            <DatePicker 
              className='input'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          {/* timepicker */}
          <div>
            <div className='flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3'>
              <FaClock />
              <div>Choose Time</div>
            </div>
            <TimePicker 
              className='input'
              clearIcon={false}
              clockIcon={false}
              onChange={setValue}
              value={value}
            />
          </div>

          {/* person number */}
          <div>person number</div>
        </form>
      </div>
    </div>
  )
};

export default Reservation;
