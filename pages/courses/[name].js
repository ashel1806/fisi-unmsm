import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"
import { getAllCoursesNames, getCourseData } from "../../lib/courses"
import { getSlugOfTeacher } from "../../lib/teachers"

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
  return (
    <Layout>
      <Head>
        <title>{courseData.nombre}</title>
      </Head>
      <h1 className="py-7 text-center text-5xl font-bold">
        {courseData.nombre}
      </h1>
      <div className="mx-auto max-w-lg flex flex-col items-center text-xl">
        <p>Créditos: <span className="text-blue-600">{courseData.creditos}</span></p>
        <p>Ciclo al que pertenece: <span className="text-red-600">{courseData.ciclo}</span></p>
        <p>
          <a href={courseData.sylabus} download >
            <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2">
              Descargar Sylabus
            </button>
          </a>
        </p>
        <ul className="text-2xl text-center">
          Profesores que lo enseñan
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
    </Layout>
  )
}