import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { getAllTeachers } from '../../lib/teachers'

export async function getStaticProps() {
  const allTeachersData = await getAllTeachers()

  return {
    props: {
      allTeachersData
    }
  }
}

export default function Teachers({ allTeachersData }) {
  return (
    <Layout>
      <Head>
        <title>Teachers</title>
      </Head>
      <h1>List of teachers</h1>
      <ul>
        {allTeachersData.map(teacher => {
          const { nombres, apellidos } = teacher
          const firstName = nombres.toLowerCase().split(' ')[0]
          const lastName = apellidos.toLowerCase().split(' ')[0]
          const nameSlug = `${firstName}-${lastName}`

          return (
            <li key={teacher.id}>
              <Link href={`/teachers/${nameSlug}`}>
                {teacher.nombres}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
    </Layout>
  )
}