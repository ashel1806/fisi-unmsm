import React, { useState } from 'react';

import Head from "next/head"

import Layout from "../../components/layout"
import Card from "../../components/card"
import { getAllTeachers, getSlugOfTeacher } from '../../lib/teachers'

export async function getStaticProps() {
  const allTeachersData = await getAllTeachers()

  return {
    props: {
      allTeachersData
    }
  }
}

export default function Teachers({ allTeachersData }) {
  const [searchTeacher, setSearchTeacher] = useState("");

  const handleSearchTeacher = ({ target }) => {
    setSearchTeacher(target.value);
  }

  let filteredTeachers = searchTeacher === ""
    ? allTeachersData
    : allTeachersData.filter(teacher =>
        teacher.nombres.toLowerCase()
          .indexOf(searchTeacher.toLowerCase()) !== -1
      )

  return (
    <Layout>
      <Head>
        <title>Profesores</title>
      </Head>
      <div className="p-7 max-w-screen-total mx-auto">
        <h1 className="text-left text-4xl font-subheading font-medium mb-7 total:text-7xl">
          Lista de profesores
        </h1>
        <div className="mb-7">
          <div className="max-w-md relative">
            <input
              className="outline-none border-2 border-black-200 px-5 py-3 rounded-full w-full"
              placeholder="Buscar Curso"
              onChange={handleSearchTeacher}
              value={searchTeacher}
            />
            <div className="absolute right-0 top-0 translate-y-2/3 mr-5">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3332 20.3333L14.9998 15M9.6665 17.6667C5.24823 17.6667 1.6665 14.0849 1.6665 9.66666C1.6665 5.24838 5.24823 1.66666 9.6665 1.66666C14.0848 1.66666 17.6665 5.24838 17.6665 9.66666C17.6665 14.0849 14.0848 17.6667 9.6665 17.6667Z" stroke="#999999" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 auto-rows-[minmax(100px,_auto)] grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTeachers.map(teacher => {
            const nameSlug = getSlugOfTeacher(teacher)

            return (
              <li key={teacher.id}>
                <Card
                  slug={nameSlug}
                  name={`${teacher.nombres} ${teacher.apellidos}`}
                  email={teacher.correo}
                  school={teacher.facultad}
                  image={teacher.imagen}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}