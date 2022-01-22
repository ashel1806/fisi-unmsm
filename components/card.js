import Link from "next/link";
import Image from "next/image";
import { CgMathPercent } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'

export default function Card({...props}) {
  const baseUrl = props.course ? '/courses' : '/teachers'
  const slug = `${baseUrl}/${props.slug}`

  const bgColor = props.categoria === 'matematicas' && 'bg-orange-200' ||
                  props.categoria === 'programacion' && 'bg-red-300' ||
                  props.categoria === 'economia' && 'bg-light-blue-200'

  return (
    <div className="p-5 bg-white rounded-3xl mb-4 h-full border-2 border-black-200">
      <div className="flex flex-col h-full justify-between">
        <div className="flex">
          {props.image ? (
            <div className="w-14 h-14 flex-shrink-0 mr-5">
              <Image
                className="rounded-full"
                src={props.image}
                alt={props.name}
                width={56}
                height={56}
                layout="responsive"
              />
            </div>
          ) : (
            <div className={`text-black-500 w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center text-3xl mr-5 ${bgColor}`}>
            {props.categoria === 'matematicas' && <CgMathPercent /> ||
             props.categoria === 'programacion' && <BsCodeSlash /> ||
             props.categoria === 'economia' && <MdAttachMoney />}
          </div>
          )}
          <div>
            <Link href={slug}>
              <a>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-800">
                  {props.name}
                </h5>
              </a>
            </Link>
            <p className="text-black-400 mb-1">
              {props.credits ? `Créditos: ${props.credits}` : props.school}
            </p>
            <p className="text-black-400 mb-4">
              {props.semester ? `Ciclo: ${props.semester}` : props.email}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link href={slug}>
            <a className="text-right font-medium bg-white px-4 py-2 border-2 border-violet-300 rounded-full text-violet-300 hover:text-white hover:bg-violet-300">Ver Más</a>
            </Link>
        </div>
        </div>
    </div>
  )
}