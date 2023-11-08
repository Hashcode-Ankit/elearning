"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Adarsh",
        profession: 'Full Stack Engineer',
        comment: 'I have found that making even a small weekly goal and sticking to it has helped. Thanks a lot for providing an amazing course.',
        imgSrc: '/assets/testimonial/user1.png',
    },
    {
        name: "Akash",
        profession: 'DevOps Engineer',
        comment: 'Very friendly instructor. Doubts are solved instantly. The in-depth content and hands-on projects have taken my web development skills to a whole new level.',
        imgSrc: '/assets/testimonial/user2.png',
    },
    {
        name: "Yash",
        profession: 'NLP Engineer',
        comment: 'Awesome course, started from scratch. Provide total hand holding and cleared all doubts. Great teaching and understood each and every topic.',
        imgSrc: '/assets/testimonial/user3.png',
    },
    {
        name: "Rohan",
        profession: 'Software Developer',
        comment: 'It was a great experience learning from Ankit sir, who has a vast knowledge about development. If you work consistently you can too become a great developer.',
        imgSrc: '/assets/testimonial/user4.png',
    },
    {
        name: "Vishal",
        profession: 'Data Analyst',
        comment: 'Nice way to learn things from Scratch, you should go for it. It made complex concepts so much more accessible. Thank you for this wonderful course and waiting for Advance Data Science course if possible.',
        imgSrc: '/assets/testimonial/user5.png',
    },
    {
        name: "Sagar",
        profession: 'Product Engineer',
        comment: 'I am extremely happy that I took this course. I\'m familiar with HTML CSS JavaScript but I want to excel myself as a Full stack developer so enrolled in this course.',
        imgSrc: '/assets/testimonial/user6.png',
    },
    {
        name: "Manisha",
        profession: 'Human Resource',
        comment: 'This course is really helpful for me, I am able to learn new things and now I found a new career path. Thank you for the entire Team.',
        imgSrc: '/assets/testimonial/user7.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 3,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center font-semibold pb-20">Our Reviews.</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-45px]">
                                        <Image
                                            src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block"
                                            style={{width: 60, height: 60, borderRadius: 60/ 2}}  />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-lightgray" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
