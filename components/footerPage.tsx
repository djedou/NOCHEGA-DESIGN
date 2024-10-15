
import React from 'react'
import Link from 'next/link'
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaCity } from "react-icons/fa";

function FooterPage() {
    return (
        <footer className='relative text-white'>
            <div className='absolute top-0 left-0 w-full overflow-hedden'>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-white"></path>
                </svg>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28 p-20'>
                    <div className='flex flex-col'>
                        <ul>
                            <li className=' text-[22px]  list-none font-semibold text-pink-500 py-2 uppercase'>Services</li>
                            <li className='my-4 list-none'>Prestations</li>
                            <li className='my-4 list-none'>Réalisations</li>
                            <li className='my-4 list-none'>Style de design d intérieur</li>
                            <li className='my-4 list-none'>Demande de devis</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <ul>
                            <li className=' text-[22px]  list-none font-semibold text-pink-500 py-2 uppercase'>Nous Contacter</li>
                        </ul>
                        <form className='w-h96 relative mt-6 ' action="">
                            <div>
                                <input className='w-full text-gray-800 p-4 h-10 rounded focus:outline-none focus:border border-pink-800 mb-2' type="email" placeholder='Votre email!' />
                                <input className='w-full h-28 text-gray-800 p-4 h-10 rounded focus:outline-none focus:border border-pink-800 mb-2' type="message " placeholder='Votre message!' />
                            </div>
                            <button className=' flex  justify-center hover:bg-pink-500 font-bold py-2 px-4 rounded  focus-outline-none focus:shadow-outline' type='submit'>Submit</button>
                        </form>
                    </div>
                    <div className='flex flex-col '>
                        <ul>
                            <li className=' text-[22px]  list-none font-semibold text-pink-500 py-2 uppercase'>Adresse</li>
                            <li className='my-4 list-none flex items-center'> <FaCity />: avenue de bruxelles 44,1060 bxl</li>
                            <li className='my-4 list-none flex items-center'> <MdOutlineMail />: ton-email@gmail.com</li>
                            <li className='my-4 list-none flex items-center'> <FaPhoneVolume />: +32 014-556-65</li>
                            <div className='flex space-x-4'>
                                <Link className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ' href="">
                                    <FaFacebook />
                                </Link>
                                <Link className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ' href="">
                                    <FaInstagram />
                                </Link>
                                <Link className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ' href="">
                                    <FaLinkedin />
                                </Link>
                                <Link className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ' href="">
                                    <FaTwitter />
                                </Link>
                                <Link className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out ' href="">
                                    <FaWhatsappSquare />
                                </Link>

                            </div>
                        </ul>
                    </div>
                </div>
                <h6 className='text-center'>copy right  prince aman </h6>
            </div>

        </footer>
    )
}

export default FooterPage
