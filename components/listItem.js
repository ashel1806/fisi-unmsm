import Image from "next/image"
import Link from "next/link"
import { CgMathPercent } from "react-icons/cg"
import { BsCodeSlash } from "react-icons/bs"
import { MdAttachMoney } from "react-icons/md"

export default function ListItem({...props}) {
  const bgColor = props.categoria === 'matematicas' && 'bg-orange-200' ||
                  props.categoria === 'programacion' && 'bg-red-300' ||
                  props.categoria === 'economia' && 'bg-light-blue-200'

  return (
    <li className="flex flex-row">
      <div className="select-none cursor-pointer flex flex-1 items-center p-4">
        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
          <Link href={`/courses/${props.slug}`}>
            <a className="block relative">
            {props.image ? (
                <Image
                  className="mx-auto object-cover rounded-full h-10 w-10"
                  src={props.image}
                  alt={props.name}
                />
            ) : (
              <div className={`text-black-500 w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center text-3xl mr-5 ${bgColor}`}>
              {props.categoria === 'matematicas' && <CgMathPercent /> ||
              props.categoria === 'programacion' && <BsCodeSlash /> ||
              props.categoria === 'economia' && <MdAttachMoney />}
            </div>
            )}
            </a>
          </Link>
        </div>
        <div className="flex-1 pl-1 mr-16">
          <div className="font-medium dark:text-white">
            {props.name}
          </div>
          <div className="text-gray-600 dark:text-gray-200 text-sm">
            {props.credits ? `${props.credits} créditos` : props.email}
          </div>
        </div>
        <button className="w-24 text-right flex justify-end">
          <Link href={`/courses/${props.slug}`}>
            <a>
              <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </a>
          </Link>
        </button>
      </div>
    </li>
  )
}
