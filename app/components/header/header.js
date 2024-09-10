'use client'

import { useEffect } from 'react';

export default function Header({ name }) {
    useEffect(() => {
        const toggleButton = document.querySelector('[data-collapse-toggle]');
        const navbar = document.getElementById('navbar-solid-bg');
    
        const toggleNavbar = () => {
          navbar.classList.toggle('hidden');
        };
    
        if (toggleButton) {
          toggleButton.addEventListener('click', toggleNavbar);
        }
    
        return () => {
          if (toggleButton) {
            toggleButton.removeEventListener('click', toggleNavbar);
          }
        };
      }, []);

    return(
        <nav className="border-black bg-black dark:bg-black dark:border-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio - </h1><span className="align-text-top">({ name })</span>
                </div>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Abount me</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}