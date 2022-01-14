import Head from "next/head"
import Layout from "../../components/layout"
import { getAllCoursesNames, getCourseData } from "../../lib/courses"

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
      {courseData.nombre}
      <br />
      {courseData.creditos}
    </Layout>
  )
}