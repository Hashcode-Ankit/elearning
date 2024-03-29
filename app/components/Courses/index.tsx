"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
    href: string;
}

const postData: DataType[] = [
    {
        heading: 'Entrepreneur',
        heading2: 'In Residence',
        name: "",
        imgSrc: '/assets/courses/entrepreneur.jpeg',
        students: 50,
        classes: 24,
        price: 15999,
        rating: 4.9,
        href:'#'
    },
    {
        heading: 'ChatGPT',
        heading2: 'and Python Training',
        name: "",
        imgSrc: '/assets/courses/chat.jpeg',
        students: 150,
        classes: 24,
        price: 24999,
        rating: 4.8,
        href:'#'
    },
    {
        heading: 'Basic + Advance',
        heading2: 'Python Programming',
        name: "",
        imgSrc: '/assets/courses/python.png',
        students: 130,
        classes: 28,
        price: 19999,
        rating: 4.7,
        href:'#'
    },
    {
        heading: 'End To End',
        heading2: 'MERN Stack',
        name: "",
        imgSrc: '/assets/courses/mern.jpeg',
        students: 120,
        classes: 26,
        price: 15999,
        rating: 4.2,
        href:'#'
    },
    {
        heading: 'Data Analytics',
        heading2: '',
        name: "",
        imgSrc: '/assets/courses/danalytics.webp',
        students: 150,
        classes: 22,
        price: 19999,
        rating: 4.4,
        href:'#'
    },
    {
        heading: 'Basic NLP',
        heading2: '+ LLM Course',
        name: "Vector Store Databases",
        imgSrc: '/assets/courses/nlp.png',
        students: 150,
        classes: 22,
        price: 21999,
        rating: 4.1,
        href:'#'
    },
    {
        heading: 'Personality ',
        heading2: 'Development',
        name: "",
        imgSrc: '/assets/courses/pd.png',
        students: 150,
        classes: 12,
        price: 11999,
        rating: 4.8,
        href:'#'
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8'>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Popular courses.</h3>
                    </div>

                    <div className='flex gap-2 mx-auto pt-5 lg:mx-0'>
                        <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                        <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Upto 100% scholarship available</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <a href={items.href}>
                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>
                                        <h5 className='text-l pt-1 text-black'>15 students per batch</h5>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-medium">₹{items.price}</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
                <br />

                <hr style={{ color: "#C4C4C4" }} />
            </div>

        );
    }
}
