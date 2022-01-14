import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import Card from "../../components/card"
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
        <title>Profesores</title>
      </Head>
      <h1 className="py-7 text-center text-5xl font-bold">Lista de profesores</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 smart:grid-cols-2 grid-flow-row gap-4">
        {allTeachersData.map(teacher => {
          const { nombres, apellidos } = teacher
          const fullName = nombres + ' ' + apellidos
          const firstName = nombres.toLowerCase().split(' ')[0]
          const lastName = apellidos.toLowerCase().split(' ')[0]
          const nameSlug = `${firstName}-${lastName}`

          return (
            <li key={teacher.id}>
              <Card
                slug={nameSlug}
                name={fullName}
                email={teacher.correo}
                school={teacher.facultad}
              />
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