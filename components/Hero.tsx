"use client";

import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        })
    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                ICS Connectx Gateway 
            </h1>
            <p className='hero__subtitle'>
            At ICS Connectx Gateway, we are committed to revolutionizing the way businesses accept payments online.
            </p>

            <CustomButton 
                title='Explore Cars'
                btnType="button"
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>

        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/laptop-illustration.png' alt='hero'
                fill className='object-contain' />


            {/* <a href="https://www.freepik.com/free-vector/nfc-technology-concept-illustration_66196966.htm#query=payment%20gateway&position=44&from_view=keyword&track=ais&uuid=828bf785-6da0-4437-9863-b90013c0d72a">Image by storyset</a> on Freepik */}
           </div>
            
            <div className='hero__image-overlay'/>

            
        </div>
    </div>
  )
}

export default Hero
