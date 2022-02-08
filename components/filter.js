import { useState } from "react"
//import { getCoursesByCategory } from "../lib/courses"

export default function Filter({ handleClick, options }) {
  const [active, setActive] = useState(false)

  const handleActiveChange = () => {
    setActive(!active)
  }

  const handleClickOption = (category) => {
    handleClick(category)
    setActive(!active)
  }

  return(
    <div className="relative inline-block text-left mb-7">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-2xl border-2 border-black-800 shadow-sm px-5 py-3 bg-white text-sm font-medium text-black-700 focus:outline-none" onClick={handleActiveChange}>
          Filtrar por categoria:
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className={`${active ? 'origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-black-800 focus:outline-none font-semibold' : 'hidden'}`}>
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
