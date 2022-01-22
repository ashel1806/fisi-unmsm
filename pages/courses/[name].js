import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"
import { getAllCoursesNames, getCourseData } from "../../lib/courses"
import { getSlugOfTeacher } from "../../lib/teachers"
import { CgMathPercent } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'

export async function getStaticProps({ params }) {
  const courseData = await getCourseData(params.name)
  return {
    props: {
      courseData
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllCoursesNames()
  return {
    paths,
    fallback: false
  }
}

export default function Course({ courseData }) {
  const bgColor = courseData.categoria === 'matematicas' && 'bg-orange-200' ||
                  courseData.categoria === 'programacion' && 'bg-red-300' ||
                  courseData.categoria === 'economia' && 'bg-light-blue-200'

  return (
    <Layout>
      <Head>
        <title>{courseData.nombre}</title>
      </Head>
      <div className="py-7 max-w-screen-total m-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
          <div className="mb-10">
            <div className={`${bgColor} w-40 h-40 text-9xl flex items-center justify-center rounded-3xl`}>
            {courseData.categoria === 'matematicas' && <CgMathPercent /> ||
             courseData.categoria === 'programacion' && <BsCodeSlash /> ||
             courseData.categoria === 'economia' && <MdAttachMoney />}
            </div>
          </div>
          <div className="md:pl-10">
            <h1 className="text-center text-5xl font-bold mb-10 md:text-left">
              {courseData.nombre}
            </h1>
            <div className="max-w-lg flex flex-col items-center text-2xl md:items-start md:mx-0">
              <p className="mb-4 md:text-left">Créditos: <span className="text-black-400">{courseData.creditos}</span></p>
              <p className="mb-4 md:text-left">Ciclo al que pertenece: <span className="text-black-400">{courseData.ciclo}</span></p>
              <div className="mb-4 md:text-left text-2xl">
                Sylabus:{' '}
                <a href={courseData.sylabus} download >
                  <button className="text-white bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2">
                    Descargar
                  </button>
                </a>
              </div>
              <div className="text-2xl text-center md:text-left">
                Profesores que lo enseñan
                <ul className="mt-4">
                  {courseData.profesores.map(teacher => {
                    const teacherSlug = getSlugOfTeacher(teacher)

                    return (
                      <li key={teacher.id}>
                        <Link href={`/teachers/${teacherSlug}`}>
                          <a className="text-violet-600">{teacher.nombres} {teacher.apellidos}</a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}