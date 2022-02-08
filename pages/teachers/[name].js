import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
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
  console.log('normal link', teacherData.imagen)  
  console.log('shorted link', teacherData.imagen.replace(/\/https\D+v[0-9]+/, ''))
  return (
    <Layout>
      <Head>
        <title>{teacherData.nombres}</title>
      </Head>
      <div className="p-7 max-w-screen-total m-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
          <div className="mb-10 rounded-lg flex items-center justify-center">
            <Image
              alt={teacherData.nombres}
              src={teacherData.imagen.replace(/\D+v[0-9]+/, '')}
              width={160}
              height={160}
            />
          </div>
          <div className="md:pl-10">
            <h1 className="text-center text-5xl font-bold mb-10 md:text-left">
              {teacherData.nombres} {teacherData.apellidos}
            </h1>
            <div className="mx-auto max-w-lg flex flex-col items-center text-2xl md:items-start md:mx-0">
              <p className="mb-4 md:text-left">Correo: <span className="text-black-400">{teacherData.correo}</span></p>
              <p className="mb-4 md:text-left">Facultad: <span className="text-black-400">{teacherData.facultad}</span></p>
              <div className="text-2xl text-center md:text-left">
                Cursos que enseña
                <ul className="mt-4">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}