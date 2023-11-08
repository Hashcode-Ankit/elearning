"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
export default class MultipleItems extends Component {

    render() {
        return (
            <div className="py-20 sm:py-24 items-center" id="accelerator">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Explore our <br /> Career Restart Program.</h2>
                </div>

                <div className="flex justify-center items-center py-20 sm:static sm:inset-auto">
                    <Link target="_blank" href="https://drive.google.com/file/d/1x50WR-WVwYPmwbJU3QMG3uH_L2W8X6JM/view">
                        <button
                          className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
                        >
                          Download Brochure
                        </button>
                    </Link>
                </div>
            </div>

        );
    }
}
