import Link from "next/link"
import Image from "next/image"

import { useState } from "react"

export default function NavBar() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <nav className="bg-black-100 smart:bg-white">
        <div className="max-w-screen-total mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <Link href='/'>
                <a className="flex-shrink-0">
                  <Image
                    src='/Profesores/fisi_uigaex.png'
                    alt='Logo de la FISI'
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
              <div className="hidden smart:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href='/courses'>
                    <a className="font-body text-black-400 hover:text-black-800 px-3 py-2 rounded-md text-sm  font-medium smart:text-lg md:text-xl lg:text-2xl">Cursos</a>
                  </Link>
                  <Link href='/teachers'>
                    <a className="font-body text-black-400 hover:text-black-800 px-3 py-2 rounded-md text-sm  font-medium smart:text-lg md:text-xl lg:text-2xl">Profesores</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex smart:hidden">
              <button
                className="text-black-800 inline-flex items-center justify-center rounded-md focus:outline-none"
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
              <a className="text-black-400 hover:text-black-800 block px-3 py-2 rounded-md text-base font-medium font-body">
                Cursos
              </a>
            </Link>
            <Link href='/teachers'>
              <a className="text-black-400 hover:text-black-800 block px-3 py-2 rounded-md text-base font-medium font-body">
                Profesores
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}