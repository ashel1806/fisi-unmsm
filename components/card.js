import Link from "next/link";

export default function Card(props) {
  const baseUrl = props.course ? '/courses' : '/teachers'
  const slug = `${baseUrl}/${props.slug}`

  return (
    <div className="p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md">
      <Link href={slug}>
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.name}
          </h5>
        </a>
      </Link>
      <p className="mb-3 font-normal text-gray-700">
        {props.credits ? `${props.creditos} creditos` : `Correo: ${props.email}`}
      </p>
      <p className="mb-3 font-normal text-gray-700">
        {props.semester ? `Pertenece al ciclo: ${props.semester}` : `Facultad: ${props.school}`}
      </p>
      <Link href={slug}>
        <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
          Ver Más
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
      </Link>
    </div>
  )
}