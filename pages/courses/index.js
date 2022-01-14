import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { getAllCourses } from "../../lib/courses"

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
      <h1>List of courses</h1>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
      <ul>
        {allCoursesData.map(course => {
          const courseName = course.nombre.toLowerCase().replace(/ /g, '-')

          return (
            <li key={course.nombre}>
              <Link href={`/courses/${courseName}`}>
                {course.nombre}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}