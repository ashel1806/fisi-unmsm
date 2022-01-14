import Head from "next/head"
import Layout from "../../components/layout";
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
      {teacherData.nombres} {teacherData.apellidos}
      <ul>
        Cursos que enseña:
        {teacherData.cursos.map(curso => (
          <li key={curso.id}>
            {curso.nombre}
          </li>
        ))}
      </ul>
    </Layout>
  )
}