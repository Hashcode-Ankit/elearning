"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { text } from "stream/consumers";


export default function HeroSection() {
  const [registered, setRegistered] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [alumnis, setAlumnis] = useState(0);
  const controls = useAnimation();
  const [openModules, setOpenModules] = useState<number[]>([]);

  const toggleModule = (moduleNumber:number) => {
    if (openModules.includes(moduleNumber)) {
      // If the module is already open, close it
      setOpenModules(openModules.filter((module) => module !== moduleNumber));
    } else {
      // If the module is closed, open it
      setOpenModules([...openModules, moduleNumber]);
    }
  };

  const buttonStyles = {
    
    display: 'inline-block',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#3498db',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginLeft: '45%',
    marginTop: '5%'

  };

  const handleButtonClick = () => {
    // Add your logic for handling the "Buy Now" action
    console.log('Buy Now clicked!');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 1000, 
  };

  const modules = [
    {
      title: 'How to find the lead?',
      items: ['0-1 Journey Type Companies (Non-Funded/Pre-Seed Funded)', '1-10 Journey Type Companies (Seed Funded/Pre-Series Funded)', '10-100 Journey Type Companies (Series Funded/Enterprise Companies)','Miscellaneous'],
    },
    {
      title: 'How to find the negative CAC in a lead?',
      items: ['0-1 Journey Type Companies (Non-Funded/Pre-Seed Funded)', '1-10 Journey Type Companies (Seed Funded/Pre-Series Funded)', '10-100 Journey Type Companies (Series Funded/Enterprise Companies)','Miscellaneous'],

    },
    {
      title: 'Life of the Entrepreneur',
      items: ['0-1 Journey Type Companies (Non-Funded/Pre-Seed Funded)', '1-10 Journey Type Companies (Seed Funded/Pre-Series Funded)', '10-100 Journey Type Companies (Series Funded/Enterprise Companies)','Miscellaneous'],
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistered((registered) => {
        const newRegistered = registered + 1;
        // Check if alumnis reaches 100 and clear the interval
        if (newRegistered >= 100) {
          clearInterval(interval);
        }
        return newRegistered;
      });
    }, 50);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((completed) => {
        const newCompleted = completed + 1;
        // Check if alumnis reaches 100 and clear the interval
        if (newCompleted >= 300) {
          clearInterval(interval);
        }
        return newCompleted;
      });
    }, 50);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlumnis((prevAlumnis) => {
        const newAlumnis = prevAlumnis + 1;
        // Check if alumnis reaches 100 and clear the interval
        if (newAlumnis >= 100) {
          clearInterval(interval);
        }
        return newAlumnis;
      });
    }, 200);
    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl" style={{ marginBottom:'30px' }}>
            Entrepreneur-in-Residence Training Programme (Upto 100% Scholarship Available)
          </h2>
          <h3 className="text-1xl text-gray sm:text-2xl" style={{ marginBottom:'30px' }}>Journey to build business from 0$</h3>
          <Slider {...settings}>
            <div>
              <img src={'/assets/courses/eir.jpeg'} alt="Slide 1"  style={{ maxWidth: '100%', maxHeight: '500px', borderRadius:'25px' }} />
            </div>
            <div>
              <img src={'/assets/courses/entrepreneur.jpeg'} alt="Slide 2"  style={{ maxWidth: '100%', maxHeight: '500px', borderRadius:'25px'  }} />
            </div>
            <div>
              <img src={'/assets/courses/mba.webp'} alt="Slide 3"  style={{ maxWidth: '100%', maxHeight: '500px', borderRadius:'25px'  }} />
            </div>
            <div>
              <img src={'/assets/courses/eir.png'} alt="Slide 4"  style={{ maxWidth: '100%', maxHeight: '500px', borderRadius:'25px' }} />
            </div>
          </Slider>
        </div>
        <p className="mt-3 text-xl text-gray-300 sm:mt-4 text-center" style={{marginTop:'80px'}}>
            The Entrepreneur-in-Residence (EIR) Training Programme is a comprehensive course designed to guide individuals in building a business from scratch with zero initial capital. The program is structured in three phases, each focusing on crucial aspects of entrepreneurship.
        </p>
        <div className="mt-10 " style={{backgroundColor:"#3498db", borderRadius:'25px', padding:'20px'}}>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 bg-blue">
            <div className="flex justify-center items-center">
              <div className="space-y-2 text-center">
                <dt className="text-lg leading-6 font-medium text-black">
                  Students Registered
                </dt>
                <dd className="mt-1 text-3xl font-extrabold text-black">
                  {registered}+
                </dd>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="space-y-2 text-center">
                <dt className="text-lg leading-6 font-medium text-black">
                  Successfully Completed
                </dt>
                <dd className="mt-1 text-3xl font-extrabold text-black">
                  {completed}+
                </dd>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="space-y-2 text-center">
                <dt className="text-lg leading-6 font-medium text-black">
                  Alumnus
                </dt>
                <dd className="mt-1 text-3xl font-extrabold text-black">
                  {alumnis}+
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl  text-center font-extrabold text-black sm:text-4xl">
            Course Outline
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="bg-white rounded-full flex items-center justify-center h-12 w-12">
              <div className="bg-gray-400 rounded-full h-8 w-8" />
              <div className="absolute -left-1 bg-gray-900 rounded-full h-4 w-4" />
            </div>
            <div className="bg-white rounded-full h-4 w-36 mx-4" />
            <div className="bg-white rounded-full flex items-center justify-center h-12 w-12">
              <div className="bg-gray-400 rounded-full h-8 w-8" />
              <div className="absolute -right-1 bg-gray-900 rounded-full h-4 w-4" />
            </div>
          </div>
          <div className="mt-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-white shadow-lg p-8 mt-6"
                onClick={() => toggleModule(index)}
              >
                <h3 className="text-xl font-bold mb-4 text-center">{module.title} 🤩</h3>
                {openModules.includes(index) && (
                  <ol className="text-gray-500" style={{marginLeft:'30%'}}>
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex}>👉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}</li>
                    ))}
                  </ol>
                )}
              </motion.div>
            ))}
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScgecwJ2iIjIZnejUCx0zZiu-fvLBZTUEPngTwndorZfjy-Kw/viewform?usp=sf_link" target='__blank' style={buttonStyles} onClick={handleButtonClick}>
            Apply For Scholarship
          </a>
        </div>
      </div>
    </div>
  );
}
