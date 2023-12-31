import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners']
    }
    ,
    {
        id: 3,
        section: "More",
        link: ['Airline fees', 'Airlines', 'Low fare tips', 'Badges &', 'Certificates']
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal'>@2023.Saral School Of Technology.All rights reserved</h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><a href="https://docs.google.com/document/d/e/2PACX-1vSKMuyixX_KkC20Ysnbl3yRBzvLLfzTyxhViguFW84xgO2skMBiPWc9WCjmZwMiHrp_4X7UX7dCEXuy/pub?embedded=true" target="_blank">Privacy policy</a></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><a href="https://docs.google.com/document/d/e/2PACX-1vTNx9Ty-Mn1VqCVTRnDMRpyjxnvNnmTg2gPgX1UkpDOK3w3MO4yJ3vKADgZ62gjoX-4IBioPoyz8HHg/pub?embedded=true" target="_blank">Refund policy</a></h4>
                    <div className="h-5 bg-dark-red opacity-25 w-0.5"></div>
                    <h4 className='text-dark-red opacity-75 text-sm font-normal'><a href="https://docs.google.com/document/d/e/2PACX-1vScY6ySMIlcidLPYsALSF4GJUzurJsdaUEyPbcVNcH4gAA6LuE7XMVklec2dA1m8MnMVs7cxlTydXNP/pub?embedded=true" target="_blank">Terms & conditions</a></h4>
                    
                </div>
            </div>
        </div>
    )
}

export default footer;
