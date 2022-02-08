import { useState } from "react"
import { getCoursesByCategory } from "../lib/courses"

export default function Filter() {
  const [active, setActive] = useState(false)

  const handleActiveChange = () => {
    setActive(!active)
  }

  const handleClickOption = async (category) => {
    console.log(await getCoursesByCategory(category))
    setActive(!active)
  }

  const options = [
    { label: 'Matemáticas', value: 'matematicas' },
    { label: 'Economía', value: 'economia' },
    { label: 'Programación', value: 'programacion' }
  ]

  return(
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" onClick={handleActiveChange}>
          Filtrar por categoria:
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={`${active ? 'origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black-800 focus:outline-none' : 'hidden'}`}>
        <div className="py-1">
          {options.map(option => (
            <span
              key={option.value}
              className='hover:bg-black-100 hover:text-black-800 text-black-700 block px-4 py-3 text-sm cursor-pointer'
              onClick={() => handleClickOption(option.value)}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
