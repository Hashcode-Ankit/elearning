"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    linkedin: string;
}

const postData: DataType[] = [
    {
        profession: 'IIT Rorrkee | Founder, Saral Tech',
        name: 'Kanish',
        imgSrc: '/assets/mentor/kanishCircular.png',
        linkedin: 'https://www.linkedin.com/in/k4ni5h/',
    },
    {
        profession: 'Founding Engineer, Datazip | Data Expert',
        name: 'Ankit',
        imgSrc: '/assets/mentor/ankit.png',
        linkedin: 'https://www.linkedin.com/in/hashcode-ankit/',
    },
    {
        profession: 'Founder, Jamrio | Marketing Expert',
        name: 'Adhiraj',
        imgSrc: '/assets/mentor/jamiloBG.png',
        linkedin: 'https://www.linkedin.com/in/aayxkay/',
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 1000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 1000,
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
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
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
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Meet with your <br /> mentors.</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                            <Link href={items.linkedin} target="_blank">
                                        <Image src={items.imgSrc} alt="user-image" width={200} height={0} className="inline-block m-auto" style={{
                                            width: "200",
                                            height: "auto"
                                        }} />
                                        <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                                <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div>
                                            </Link>
                                    </div>
                                    <div className="mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
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
