"use client";

import React from 'react';
import Image from 'next/image';
import { useContext } from 'react';
import { CursorContext } from "@/components/CursorContext";
import { motion } from 'framer-motion';

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.footer 
    initial={{opacity: 0, y: 60}}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay:2, duration: 0.8, ease: "easeInOut" },
    }}
    className="bg-accent-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/*Logo*/}
        <div className="text-center md:text-left md:w-2/4 lead max-w-xl mx-auto">
          <div className="flex justify-center md:justify-start">
            <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="bg-accent p-3 rounded">
              <span className="font-bold">
                <Image src="/assets/logo.svg" alt="Logo" width={100} height={50} />
              </span>
            </motion.div>
          </div>
          <motion.p 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="mt-4 text-gray-600 leading-relaxed">
            Tailored skincare solution for a healthy complexion, offering customized care for radiant skin.
          </motion.p>
          <div className="flex justify-center md:justify-start mt-4 space-x-2">
            <div className="h-4 w-4 rounded-full bg-primary"></div>
            <div className="h-4 w-4 rounded-full bg-accent"></div>
            <div className="h-4 w-4 rounded-full bg-secondary-100"></div>
          </div>
        </div>

        {/*Links*/}
        <motion.div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="text-center md:text-left md:w-1/4">
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2 uppercase">
            <li><a href="/" className="text-gray-600 hover:text-primary">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-primary">About</a></li>
            <li><a href="/treatments" className="text-gray-600 hover:text-primary">Treatments</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
          </ul>
        </motion.div>

        {/*Office*/}
        <motion.div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="text-center md:text-left md:w-1/4">
          <h3 className="font-bold mb-4">Our Office</h3>
          <p className="text-gray-600">
            123/45 street 8000 Road, <br />
            Galle. <br />
            Phone: +94(76) 999 1234<br/>
            Fax: +94(91) 999 1234
          </p>
        </motion.div>
      </div>

      {/*Text*/}
      <motion.div 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="text-center mt-10 text-gray-600">
        &copy; 2024 skincare. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
