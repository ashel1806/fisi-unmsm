import React, { useState } from 'react';

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
  const [searchCourse, setSearhCourse] = useState("");

  const handleSearchCourse = ({ target }) => {
    setSearhCourse(target.value);
  }

  let filteredCourses = searchCourse === ""
    ? allCoursesData
    : allCoursesData.filter(course =>
        course.nombre.toLowerCase()
          .indexOf(searchCourse.toLowerCase()) !== -1
      )

  return (
    <Layout>
      <Head>
        <title>Cursos</title>
      </Head>

      <div className="p-7 max-w-screen-total mx-auto">
        <h1 className="text-left text-4xl font-subheading font-medium mb-7 total:text-7xl">
          Lista de Cursos
        </h1>
        <div className="mb-7">
          <div className="max-w-md relative">
            <input
              className="outline-none border-2 border-black-200 px-5 py-3 rounded-full w-full"
              placeholder="Buscar Curso"
              onChange={handleSearchCourse}
              value={searchCourse}
            />
            <div className="absolute right-0 top-0 translate-y-2/3 mr-5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3332 20.3333L14.9998 15M9.6665 17.6667C5.24823 17.6667 1.6665 14.0849 1.6665 9.66666C1.6665 5.24838 5.24823 1.66666 9.6665 1.66666C14.0848 1.66666 17.6665 5.24838 17.6665 9.66666C17.6665 14.0849 14.0848 17.6667 9.6665 17.6667Z" stroke="#999999" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          {filteredCourses.map(course => {
            const courseSlug = getSlugOfCourse(course.nombre)

            return (
              <li key={course.nombre}>
                <Card
                  course
                  slug={courseSlug}
                  name={course.nombre}
                  credits={course.creditos}
                  semester={course.ciclo}
                  categoria={course.categoria}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}