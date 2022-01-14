import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import Card from "../../components/card"
import { getAllCourses, getSlugOfCourse } from "../../lib/courses"

export async function getStaticProps() {
  const allCoursesData = await getAllCourses()

  return {
    props: {
      allCoursesData
    }
  }
}

export default function Courses({ allCoursesData }) {
  return (
    <Layout>
      <Head>
        <title>Cursos</title>
      </Head>

      <h1 className="py-7 text-center text-5xl font-bold">Lista de Cursos</h1>

      <ul className="grid grid-cols-1 md:grid-cols-3 smart:grid-cols-2 grid-flow-row gap-4">
        {allCoursesData.map(course => {
          const courseSlug = getSlugOfCourse(course.nombre)

          return (
            <li key={course.nombre}>
              <Card
                course
                slug={courseSlug}
                name={course.nombre}
                credits={course.creditos}
                semester={course.ciclo}
              />
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}