import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { Portfolio } from '../pages/Portfolio'

export const Navbar = () => {
  return (
        <nav class="border-gray-200 bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/Home" class="flex items-center">
                <img class="h-8 mr-3" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Sutsiki</span>
            </Link>
            <button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                {/* Ici Icones tailwind pour la NavBar */}
            </button>
            <div class="hidden w-full md:block md:w-auto">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link to="/Home" class="block py-2 pl-3 pr-4 md:border-0 md:hover:text-blue-700 md:p-0 text-white">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio" class="block py-2 pl-3 pr-4 md:border-0 md:hover:text-blue-700 md:p-0 text-white">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/Contact" class="block py-2 pl-3 pr-4 md:border-0 md:hover:text-blue-700 md:p-0 text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
  )
}
