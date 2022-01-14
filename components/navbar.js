import Link from "next/link"
import Image from "next/image"
import fisiLogo from "../public/fisi.png"

import { useState } from "react"

export default function NavBar() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <nav className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href='/'>
                <a className="flex-shrink-0">
                  <Image
                    className="h-8 w-8"
                    src={fisiLogo}
                    alt='Logo de la FISI'
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
              <div className="hidden smart:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href='/courses'>
                    <a className="text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Cursos</a>
                  </Link>
                  <Link href='/teachers'>
                    <a className="text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Profesores</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex smart:hidden">
              <button
                className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={handleClick}
              >
                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${active ? '' : 'hidden'} smart:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href='/courses'>
              <a className="text-gray-400 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Cursos
              </a>
            </Link>
            <Link href='/teachers'>
              <a className="text-gray-400 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                Profesores
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}