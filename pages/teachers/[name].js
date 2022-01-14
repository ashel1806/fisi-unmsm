import Head from "next/head"
import Link from "next/link";
import Layout from "../../components/layout";
import { getSlugOfCourse } from "../../lib/courses";
import { getAllTeachersNames, getTeacherData } from "../../lib/teachers";

export async function getStaticProps({ params }) {
  const teacherData = await getTeacherData(params.name)

  return {
    props: {
      teacherData
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllTeachersNames()
  return {
    paths,
    fallback: false
  }
}

export default function Teacher({ teacherData }) {
  return (
    <Layout>
      <Head>
        <title>{teacherData.nombres}</title>
      </Head>
      <h1 className="py-7 text-center text-5xl font-bold">
        {teacherData.nombres} {teacherData.apellidos}
      </h1>
      <div className="mx-auto max-w-lg flex flex-col items-center text-xl">
        <p>Correo: <span className="text-blue-600">{teacherData.correo}</span></p>
        <p>Facultad: <span className="text-red-600">{teacherData.facultad}</span></p>
        <ul className="text-2xl text-center">
          Cursos que enseña
          {teacherData.cursos.map(curso => {
            const courseSlug = getSlugOfCourse(curso.nombre)

            return (
              <li key={curso.id}>
                <Link href={`/courses/${courseSlug}`}>
                  <a className="text-violet-600">{curso.nombre}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}